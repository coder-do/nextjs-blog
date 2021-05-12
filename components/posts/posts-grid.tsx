import * as React from 'react';
import PostItem from './post-item';
import styles from '@/postStyle/posts-grid.module.css';
import { Allposts } from 'types/Post';

const PostsGrid: React.FC<Allposts> = ({ posts }): JSX.Element => (
    <ul className={styles.grid}>
        {posts.map((post: any) => (
            <PostItem key={post.slug} post={post} />
        ))}
    </ul>
);

export default PostsGrid;