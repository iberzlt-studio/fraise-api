import fs from 'fs/promises';
import path from 'path';

async function getFilePaths(dirPath: string): Promise<string[]> {
  let entries = await fs.readdir(dirPath, { withFileTypes: true });

  let filePaths: Promise<string[]>[] = entries.map(async (entry) => {
    let fullPath = path.join(dirPath, entry.name);
    return entry.isDirectory() ? getFilePaths(fullPath) : [fullPath];
  });

  return Array.prototype.concat(...await Promise.all(filePaths));
}

getFilePaths('src/routers/api').then(filePaths => {
  console.log(filePaths);
  
}).catch(error => {
  console.error(error);
});