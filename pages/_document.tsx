import Document, { Head, Main, NextScript, Html, DocumentContext } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { ServerStyleSheet } from 'styled-components';
import theme from 'config/theme';

// import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  componentDidMount() {

  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="apple-touch-icon" href="/images/icons/icon-72x72.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
          <link rel="canonical" href="https://next-typescript-springboard.github.io" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="manifest" href="/manifest.json" />
          <script src="https://unpkg.com/url-polyfill@1.1.8/url-polyfill.js" />
        </Head>
        <style jsx global>{`
                    body { 
                        margin: 0px;
                    }
                    `}
        </style>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(
          sheets.collect(<App {...props} />)
        ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <>
          {initialProps.styles}
          {sheets.getStyleElement()}
          {sheet.getStyleElement()}
          {/* {flush() || null} */}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};