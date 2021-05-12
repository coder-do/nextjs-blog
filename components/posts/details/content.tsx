import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import PostHeader from './header';
import styles from '@/postStyle/post-content.module.css';
import { Post } from 'types/Post';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';

const PostContent: React.FC<Post> = ({ post }): JSX.Element => {
    const imgPath = `/images/posts/${post.image}`;

    const customRenderers = {
        code(code: any) {
            const { className, children } = code;
            const language = className.split('-')[1];
            const temp = children.map((el: string) => el.trim());
            console.log(temp);
            return (
                <SyntaxHighlighter
                    style={dark}
                    language={language}
                    children={temp}
                    showLineNumbers
                />
            );
        },
    };

    return (
        <article className={styles.content} >
            <PostHeader title={post.title} image={imgPath} />
            <ReactMarkdown components={customRenderers}>
                {post.content}
            </ReactMarkdown>
        </article >
    )
};

export default PostContent;