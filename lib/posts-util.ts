import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
const postPath = path.join(process.cwd(), 'posts');

export function getFiles() {
    return fs.readdirSync(postPath);
}

export function getPostData(pPath: string) {
    const postSlug = pPath.replace(/\.md$/, '');
    const filePath = path.join(postPath, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);


    const postData = {
        slug: postSlug,
        ...data,
        content
    };

    return postData;
}

export function getAllPosts() {
    const postFiles: string[] = getFiles();

    const all = postFiles.map((item: string) => {
        return getPostData(item);
    });

    const sorted = all.sort((a: any, b: any) => a.date > b.date ? -1 : 1);
    return sorted;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();

    const featured = allPosts.filter((post: any) => post.isFeatured);

    return featured;
}