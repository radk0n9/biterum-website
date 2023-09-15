import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";

export function getPosts(dir) {
  const directoriesInDirectory = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);

  const fileNames = directoriesInDirectory
    .map((dirName) => {
      const newDirectoryForItem = `${dir}/${dirName}`;
      const fileNamesInDirectory = fs.readdirSync(newDirectoryForItem);

      const htmlFileNames = fileNamesInDirectory.filter((filename) =>
       ( filename.endsWith(".md"))
      );

      return htmlFileNames;

    })
    .flat();

  const allPosts = fileNames.map((nameFile) => {
    const id = nameFile.replace(/\.md$/, "");

    const fullPath = path.join(dir, id, nameFile);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);
    const markdownContent = matterResult.content;
    const htmlContent = remark().use(html).processSync(markdownContent).toString();

    const dataCreation = matterResult.data.date;

    if (dataCreation == null){
        const todayDate = new Date().toISOString().slice(0, 10);
        matterResult.data.date = todayDate;

        const updateFileDate = matter.stringify(matterResult);
        
        fs.writeFileSync(fullPath, updateFileDate, "utf-8");
    }
    return {
      id,
      htmlContent,
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
