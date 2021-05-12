import * as React from 'react';
import Image from 'next/image';
import classes from '@/postStyle/post-header.module.css';
import { HeaderProps } from 'types/Post';

const PostHeader: React.FC<HeaderProps> = ({ title, image }): JSX.Element => (
    <header className={classes.header}>
        <h1>{title}</h1>
        <Image src={image} alt={title} width={200} height={150} />
    </header>
);

export default PostHeader;