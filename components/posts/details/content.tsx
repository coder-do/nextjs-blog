import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import PostHeader from './header';
import Image from 'next/image';
import styles from '@/postStyle/post-content.module.css';
import { Post } from 'types/Post';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

const PostContent: React.FC<Post> = ({ post }): JSX.Element => {
    const imgPath = `/images/posts/${post.image}`;

    const customRenderers = {
        p(paragraph: any) {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                return (
                    <div className={styles.image}>
                        <Image
                            src={`${image.properties.src}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }

            return <p>{paragraph.children}</p>;
        },
        code(code: any) {
            const { className, children } = code;
            const language = className.split('-')[1];
            const temp = children.map((el: string) => el.trim());
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