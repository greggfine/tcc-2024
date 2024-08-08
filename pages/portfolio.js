import Website from "components/Website.tsx";
import styles from "styles/portfolio.module.scss";
import websites from "data/websites.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Radium, { StyleRoot } from "radium";
import { basePath } from "basePath";

// const style = {
const style =
  process.env.NODE_ENV === "production"
    ? {
        "@media (max-width: 960px)": {
          backgroundImage: `url("${basePath}/images/portfolio/unsplash/web-design-computer-setup_mobile.webp")`,
        },
        "@media (min-width: 960px)": {
          backgroundImage: `url("${basePath}/images/portfolio/unsplash/web-design-computer-setup.webp")`,
        },
      }
    : {
        "@media (max-width: 960px)": {
          backgroundImage:
            'url("/images/portfolio/unsplash/web-design-computer-setup_mobile.webp")',
        },
        "@media (min-width: 960px)": {
          backgroundImage:
            'url("/images/portfolio/unsplash/web-design-computer-setup.webp")',
        },
      };

function Portfolio(props) {
  return (
    <>
      <NextSeo
        title="Custom Web Design and Apps New Jersey | The Code Creative"
        description="The Code Creative portfolio showcasing custom websites and web apps."
      />
      <Head>
        <link
          rel="preload"
          href={
            process.env.NODE_ENV === "production"
              ? `${basePath}/images/portfolio/unsplash/web-design-computer-setup_mobile.webp`
              : "/images/portfolio/unsplash/web-design-computer-setup_mobile.webp"
          }
          as="image"
          media="{max-width: 960px}"
        />
        <link
          rel="preload"
          href={
            process.env.NODE_ENV === "production"
              ? `${basePath}/images/portfolio/unsplash/web-design-computer-setup.webp`
              : "/images/portfolio/unsplash/web-design-computer-setup.webp"
          }
          as="image"
          media="{min-width: 960px}"
        />
      </Head>
      <StyleRoot>
        <div className={styles.Portfolio} id="header-section">
          <div className={styles.Portfolio__heading} style={style}></div>

          <div className={styles.Portfolio__websitesWrapper}>
            <h2 className={styles.Portfolio__wrapperHeading}>
              Websites & Apps
            </h2>
            <ul className={styles.Portfolio__websites}>
              {websites.sites.map((site, idx) => (
                <Website website={site} key={idx} />
              ))}
            </ul>
          </div>
          {/* <div className={styles.Portfolio__horizontalRow}></div> */}
          {/* <div className={styles.Portfolio__websitesWrapper}>
            <h2 className={styles.Portfolio__wrapperHeading}>Web Apps</h2>
            <ul className={styles.Portfolio__websites}>
              {websites.apps.map((site, idx) => (
                <Website website={site} key={idx} />
              ))}
            </ul>
          </div> */}
        </div>
      </StyleRoot>
    </>
  );
}

export default Portfolio;
