import React from "react";
import SEO from "next-seo.config";
import { DefaultSeo } from "next-seo";
import Layout from "components/Layout.tsx";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import "styles/style.scss";
import Consent from "components/Consent.tsx";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    // <AnimatePresence mode="wait">
    //   <motion.div
    //     key={router.route}
    //     initial="initialState"
    //     animate="animateState"
    //     exit="exitState"
    //     transition={{ duration: 0.7 }}
    //     variants={{
    //       initialState: {
    //         opacity: 0.7,
    //       },
    //       animateState: {
    //         opacity: 1,
    //       },
    //       exitState: {
    //       },
    //     }}
    //   >
    <Layout>
      <DefaultSeo {...SEO} />
      {/* <Consent /> */}
      <Component {...pageProps} />
      <Analytics />
    </Layout>
    //   </motion.div>
    // </AnimatePresence>
  );
}

export default MyApp;
