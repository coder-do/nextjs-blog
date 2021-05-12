import * as React from 'react';
import PostsGrid from './posts-grid';
import styles from '@/postStyle/all-posts.module.css';
import { Allposts } from 'types/Post';

const AllPosts: React.FC<Allposts> = ({ posts }): JSX.Element => (
    <section className={styles.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={posts} />
    </section>
);

export default AllPosts;