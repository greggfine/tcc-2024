//@ts-ignore
import Navigation from "./Navigation.tsx";
import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
