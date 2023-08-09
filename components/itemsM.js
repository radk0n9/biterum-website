import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const itemsDirectory = path.join(process.cwd(), 'components/itemsM');

export function getItems(){

    const fileNames = fs.readdirSync(itemsDirectory);
    const allItems = fileNames.map((fileName) => {
        const id = fileName.replace(/\.html/, '');
        
        const fullPath = path.join(itemsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents)
        return {
            id,
            ...matterResult
        }
    });
    return allItems;   
};