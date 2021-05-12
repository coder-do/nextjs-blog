import * as React from 'react';
import Hero from '@/homePage/hero';
import FeaturedPosts from '@/homePage/featured-posts';
import { getFeaturedPosts } from 'lib/posts-util';
import { Allposts } from 'types/Post';

const IndexPage: React.FC<Allposts> = ({ posts }) => (
    <>
        <Hero />
        <FeaturedPosts posts={posts} />
    </>
)

export function getStaticProps() {
    const posts = getFeaturedPosts();
    return {
        props: {
            posts: posts
        },
        revalidate: 40
    }
}

export default IndexPage;