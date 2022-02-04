import '../ui/styles/globals.css';
import type { AppProps } from 'next/app';
import styles from '../ui/styles/Home.module.css';
import Link from 'next/link';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <header>
                <Link href={'/'}>
                    <a>
                        <h1 className={styles['title']}>
                            Treina
                            <span className={styles['title-second-word']}>
                                Blog
                            </span>
                        </h1>
                    </a>
                </Link>
            </header>
            <Component {...pageProps} />
        </SessionProvider>
    );
}
export default MyApp;
