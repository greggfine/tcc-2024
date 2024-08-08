// @ts-nocheck
import heroStyles from "styles/hero.module.scss";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import gregg from "@/images/hero/the-code-creative-owner-gregg-fine.jpg";
import Radium, { StyleRoot } from "radium";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import lottieAnimation from "@/images/lottie/63487-programming-computer.json";
import { basePath } from "basePath";

const style =
  process.env.NODE_ENV === "production"
    ? {
        "@media (max-width: 960px)": {
          backgroundImage: `url("${basePath}/images/hero/pixabay/hero-bg_comp_mobile.webp")`,
        },
        "@media (min-width: 960px)": {
          backgroundImage: `url("${basePath}/images/hero/pixabay/hero-bg_comp.webp")`,
        },
      }
    : {
        "@media (max-width: 960px)": {
          backgroundImage:
            'url("/images/hero/pixabay/hero-bg_comp_mobile.webp")',
        },
        "@media (min-width: 960px)": {
          backgroundImage: 'url("/images/hero/pixabay/hero-bg_comp.webp")',
        },
      };

const Hero = () => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/tcc-2024/images/hero/pixabay/hero-bg_comp_mobile.webp"
          as="image"
          media="{max-width: 960px}"
        />
        <link
          rel="preload"
          href="/tcc-2024/images/hero/pixabay/hero-bg_comp.webp"
          as="image"
          media="{min-width: 960px}"
        />
      </Head>
      <StyleRoot>
        <div className={heroStyles.Hero} style={style}>
          <div className={heroStyles.Hero__content}>
            <div className={heroStyles.Hero__content__text}>
              <h2>
                Websites &#38; Apps that
                <span> build your brand</span>.
              </h2>
              <h1>
                New Jersey-based web development and design with a personal
                touch.
              </h1>
              <div className={heroStyles.Hero__content__images__mobile}>
                {/* <Image
                  src={gregg}
                  alt="The Code Creative Owner and Web Developer Gregg Fine"
                  priority={true}
                /> */}
                <Player
                  autoplay
                  loop
                  //   src="https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json"
                  src={lottieAnimation}
                  // style={{ height: "600px", width: "600px" }}
                  className={heroStyles.Hero__lottie}
                >
                  <Controls
                    visible={false}
                    buttons={["play", "repeat", "frame", "debug"]}
                  />
                </Player>
              </div>
              <div className={heroStyles.Hero__cta}>
                <Link
                  href="/contact"
                  className={`${heroStyles.Hero__cta__getintouch} ${heroStyles.Hero__cta__btn}`}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className={heroStyles.Hero__content__images__desktop}>
              {/* <Image
                src={gregg}
                alt="The Code Creative Owner and Web Developer Gregg Fine"
              /> */}
              <Player
                autoplay
                loop
                // src="https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json"
                src={lottieAnimation}
                className={heroStyles.Hero__lottie}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </div>
          </div>
        </div>
      </StyleRoot>
    </>
  );
};

export default Hero;
