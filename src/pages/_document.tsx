import Document, { Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
