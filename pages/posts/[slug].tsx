import * as React from 'react';
import PostContent from 'components/posts/details/content';
import { getPostData, getFiles } from 'lib/posts-util';
import { Post } from 'types/Post';

const SinglePost: React.FC<Post> = ({ post }) => <PostContent post={post} />

export function getStaticProps({ params }: any) {
    const { slug } = params;
    const postData = getPostData(slug);
    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const files = getFiles();

    const names = files.map(el => el.replace(/\.md$/, ''));
    return {
        paths: names.map(elem => ({ params: { slug: elem } })),
        fallback: false
    }
}

export default SinglePost;