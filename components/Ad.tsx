import Image from "next/legacy/image";
import styles from "styles/ad.module.scss";
import { basePath } from "basePath";
const Ad = ({ txt, imgSrc, imgWidth, imgHeight, href }) => {
  return (
    <div className={styles.Ad}>
      <a className={styles.Ad__txt} href={href}>
        <p>{txt}</p>
        <Image
          src={
            process.env.NODE_ENV === "production"
              ? `${basePath}${imgSrc}`
              : `${imgSrc}`
          }
          width={imgWidth}
          height={imgHeight}
          layout="responsive"
          className={styles.Ad__img}
        />
      </a>
    </div>
  );
};

export default Ad;
