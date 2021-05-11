import * as React from 'react';
import Image from 'next/image';
import styles from '@/home/hero.module.css';

const Hero: React.FC<{}> = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image
                    src='/images/hero.png'
                    alt='An image showing me'
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I'm Meruzh</h1>
            <p>
                I blog about web development - especially frontend frameworks like
                React or Next.
            </p>
        </section>
    )
}

export default Hero;