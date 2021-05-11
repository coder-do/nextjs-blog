import * as React from 'react';
import styles from '@/home/featured-posts.module.css';

const FeaturedPosts: React.FC<Element> = ({ posts }: any) => {
    return (
        <section className={styles.latest}>
            <h2>Featured Posts</h2>
        </section>
    )
}

export default FeaturedPosts;