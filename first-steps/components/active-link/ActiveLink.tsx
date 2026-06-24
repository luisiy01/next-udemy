'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from './ActiveLink.module.css';

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text }: Props) => {

    const pathName = usePathname()

    return (
        <Link className={`${styles.link} ${styles['active-link']}`} href={path}>{text}</Link>
    )
}
