import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";

export function getItems(dir) {
  const fileNames = fs.readdirSync(dir);
  const allItems = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(dir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);
    const markdownContent = matterResult.content;
    const htmlContent = remark().use(html).processSync(markdownContent).toString();

    return {
      id,
      htmlContent,
      ...matterResult,
    };
  });
  return allItems;
}
