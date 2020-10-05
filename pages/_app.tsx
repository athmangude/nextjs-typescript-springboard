// import { Provider } from "react-redux";
import App from "next/app";
// import withRedux from "next-redux-wrapper";
import Router from 'next/router';
// import { createBrowserHistory } from "history";
// import { configureStore } from "Flux/configureStore";
import theme from "config/theme";
import ThemeProvider from "lib/StyledMaterialThemeProvider";
import Head from 'next/head';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      // <Provider store={store}>
      <ThemeProvider theme={theme} >
        <>
          <Head>
            <meta name="viewport" content="viewport-fit=cover, minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          </Head>
        </>
        <Component {...pageProps} />
      </ThemeProvider>
      // </Provider>
    );
  }
}

// export default withRedux(configureStore, { debug: false, storeKey: "store" })(
//   withApollo(MyApp)
// );

export default MyApp;

// https://medium.com/@bhavikbamania/a-beginner-guide-for-redux-with-next-js-4d018e1342b2