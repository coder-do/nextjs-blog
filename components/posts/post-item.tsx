import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from 'types/Post';
import styles from '@/postStyle/post-item.module.css';

const PostItem: React.FC<Post> = ({ post }): JSX.Element => {
    const { title, image, excerpt, date, slug } = post;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const imagePath = `/images/posts/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
        <li className={styles.post}>
            <Link href={linkPath}>
                <a>
                    <div className={styles.image}>
                        <Image
                            src={imagePath}
                            alt={title}
                            width={300}
                            height={200}
                            layout='responsive'
                        />
                    </div>
                    <div className={styles.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
}

export default PostItem;