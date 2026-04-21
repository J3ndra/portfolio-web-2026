import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getMarkdownData(subDir: string) {
  const directoryPath = path.join(contentDirectory, subDir);
  
  if (!fs.existsSync(directoryPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(directoryPath);
  const allData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const filePath = path.join(directoryPath, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id: fileName.replace(/\.md$/, ''),
        content,
        ...data,
      };
    });

  // Sort by filename (01-, 02-, etc.)
  return allData.sort((a: any, b: any) => (a.id > b.id ? 1 : -1));
}
