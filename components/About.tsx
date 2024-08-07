import styles from "styles/about.module.scss";
import Image from "next/legacy/image";
import greggAboutImg from "@/images/about/developer-gregg-fine-working-at-computer.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className={styles.about}>
      <h1 className={styles.about__heading}>
        About{" "}
        <span className={styles.about__heading__name}>The Code Creative</span>
      </h1>
      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.9, type: "spring", stiffness: 50 }}
        className={styles.about__imgContainer}
      >
        {/* <Image
          src={greggAboutImg}
          layout="responsive"
          className={styles.about__greggAboutImg}
          quality={70}
          alt="Web Developer Gregg Fine working at his computer"
        /> */}
        <img
          src="./images/about/developer-gregg-fine-working-at-computer.jpg"
          className={styles.about__greggAboutImg}
          alt="Web Developer Gregg Fine working at his computer"
        />
      </motion.div>
      <p className={styles.about__content}>
        Gregg Fine, aka "The Code Creative", is a full-stack web developer who
        works with individuals, brands, and agencies to develop beautiful and
        impactful websites, e-commerce stores, web applications, and more.
      </p>
      <p className={styles.about__content}>
        Before immersing himself in the world of web development, Gregg worked
        extensively as a music producer for some of the world’s leading
        advertising agencies and brands (from Calvin Klein to Old Navy). How
        does this experience translate to the world of coding for the web? -
        Gregg understands what makes brands tick. He strives to bring out a
        brand's message and personality through cohesive and inspiring layouts
        and designs.
      </p>
      <p className={styles.about__content}>
        Also, as an educator, in addition to running{" "}
        <a
          href="https://www.youtube.com/c/TheCodeCreative"
          target="_blank"
          rel="noopener"
          className={styles.about__link}
        >
          The Code Creative YouTube Channel
        </a>
        , Gregg has published 19 courses with macProVideo on topics ranging from
        coding with the Web Audio API to music theory and technology. Gregg also
        actively blogs on coding, web development, and SEO on{" "}
        <a href="/blog" className={styles.about__link}>
          The Code Creative Blog
        </a>
        .
      </p>
      <p className={styles.about__content}>
        Gregg lives in Westfield, NJ with his wife, his energetic{" "}
        {new Date().getFullYear() - 2012}-year-old daughter, and two
        ear-rub-loving dogs.
      </p>
    </div>
  );
}
