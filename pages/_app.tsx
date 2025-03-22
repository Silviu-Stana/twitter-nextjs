import Layout from '@/components/Layout';
import Modal from '@/components/Modal';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Modal actionLabel="Submit" title="Test Modal" isOpen />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
