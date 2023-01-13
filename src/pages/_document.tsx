import Document, { Head, Html, Main, NextScript } from 'next/document';
// import emotionCache from '../lib/emotion-cache';

// const { extractCritical } = createEmotionServer(emotionCache);

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
        </Head>

        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
