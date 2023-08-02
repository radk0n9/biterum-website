
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// const fs = require('fs');
// const matter = require('gray-matter');
// const path = require('path');

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



// export function Card(props){
//     return (
//         <div className=''>
//             {props.title}
//             {props.content}
//         </div>
//     );
// };
// getItems()

// export default function handler(req, res){
//     const fileNames = fs.readdirSync(itemsDirectory);
//     const allItems = fileNames.map((fileName) => {
//         const id = fileName.replace(/\.html/, '');
        
//         const fullPath = path.join(itemsDirectory, fileName);
//         const fileContents = fs.readFileSync(fullPath);

//         const matterResult = matter(fileContents)
//         console.log(matterResult)

//         res.status(200).json(matterResult);
//     });
//     return allItems;
// }