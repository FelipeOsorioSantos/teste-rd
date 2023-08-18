import Head from 'next/head';

interface AppSeoProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  url?: string;
}

export const AppSeo = ({
  title,
  description,
  image,
  type,
  url,
}: AppSeoProps) => {
  return (
    <Head>
      {/*title*/}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />

      {/*type*/}
      <meta property="og:type" content={type || 'website'} />

      {/*image*/}
      <meta name="image" content={image} />
      <meta property="og:image" content={image} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:card" content="summary_large_image" />

      {/*description*/}
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="twitter:description" content={description} />

      {/*url*/}
      <meta name="url" content={url} />
      <meta property="og:url" content={url} />
      <meta property="twitter:url" content={url} />

      {/*url*/}
      <script
        type="text/javascript"
        async
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/3aaf7eb6-b57a-4880-8b1c-6ec962e16c59-loader.js"
      ></script>
    </Head>
  );
};
