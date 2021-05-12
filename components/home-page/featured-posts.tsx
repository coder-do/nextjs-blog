import * as React from 'react';
import PostGrid from 'components/posts/posts-grid';
import styles from '@/homeStyle/featured-posts.module.css';
import { Allposts } from 'types/Post';

const FeaturedPosts: React.FC<Allposts> = ({ posts }): JSX.Element => (
    <section className={styles.latest}>
        <h2>Featured Posts</h2>
        <PostGrid posts={posts} />
    </section>
)

export default FeaturedPosts;