import * as React from 'react';
import AllPosts from 'components/posts/all-posts';
import { getAllPosts } from 'lib/posts-util';
import { Allposts } from 'types/Post';

const Posts: React.FC<Allposts> = ({ posts }) => <AllPosts posts={posts} />

export function getStaticProps() {
    const posts = getAllPosts();
    return {
        props: {
            posts: posts
        },
        revalidate: 40
    }
}

export default Posts;