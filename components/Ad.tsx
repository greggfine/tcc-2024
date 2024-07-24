import Image from "next/legacy/image";
import styles from "styles/ad.module.scss";
const Ad = ({ txt, imgSrc, imgWidth, imgHeight, href }) => {
  return (
    <div className={styles.Ad}>
      <a className={styles.Ad__txt} href={href}>
        <p>{txt}</p>
        <Image
          src={imgSrc}
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
