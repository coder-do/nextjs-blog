import * as React from 'react';
import Link from 'next/link';
import Logo from './logo';
import styles from '@/layoutStyle/main-nav.module.css';

const Nav: React.FC<React.ReactNode> = (): JSX.Element => (
    <header className={styles.header}>
        <Link href='/'>
            <a>
                <Logo />
            </a>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link href='/posts'>Posts</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Nav;