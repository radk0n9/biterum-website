import fs from "fs";
import path from "path";
import matter from "gray-matter";

const itemsDirectory = path.join(process.cwd(), "app/aktualnosci/posts");

export function getPosts() {
  const directoriesInDirectory = fs
    .readdirSync(itemsDirectory, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);

  const fileNames = directoriesInDirectory
    .map((dirName) => {
      const newDirectoryForItem = `${itemsDirectory}/${dirName}`;
      const fileNamesInDirectory = fs.readdirSync(newDirectoryForItem);

      const htmlFileNames = fileNamesInDirectory.filter((filename) =>
       ( filename.endsWith(".html"))
      );

      return htmlFileNames;

    })
    .flat();

  const allPosts = fileNames.map((nameFile) => {
    const id = nameFile.replace(/\.html/, "");

    const fullPath = path.join(itemsDirectory, id, nameFile);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);
    const dataCreation = matterResult.data.date;

    if (dataCreation == null){
        const todayDate = new Date().toISOString().slice(0, 10);
        matterResult.data.date = todayDate;

        const updateFileDate = matter.stringify(matterResult);
        
        fs.writeFileSync(fullPath, updateFileDate, "utf-8");
    }
    return {
      id,
      ...matterResult,
    };
  });

  allPosts.sort((a, b) => {
    const dateA = new Date(a.data.date);
    const dateB = new Date(b.data.date);
    return dateB - dateA;
  });

  return allPosts;
}
