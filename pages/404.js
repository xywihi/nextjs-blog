import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';

// pages/404.js
export default function Custom404() {
    return (
        <Layout home>
            <Head>
                <title>404</title>
            </Head>
            <h1>404 - Page Not Found</h1>
        </Layout>
    )
  }