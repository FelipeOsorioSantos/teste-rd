import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const LazyLoadComponent = dynamic(
  () => import('../components/analise-credito'),
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shopbanx - Solicitação de crédito</title>
      </Head>
      <LazyLoadComponent />
    </>
  );
};

export default Home;
