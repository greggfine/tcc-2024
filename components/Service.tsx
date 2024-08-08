import styles from "styles/services.module.scss";
import Image from "next/image";
const basePath = "/tcc-2024";
const Service = ({ src, alt, title, content }) => {
  return (
    <div className={styles.CardGrid__serviceCard}>
      <Image
        src={`${basePath}${src}`}
        alt={alt}
        className={styles.CardGrid__cardIcon}
        width={60}
        height={60}
      />
      {/* <img src={src} alt={alt} className={styles.CardGrid__cardIcon} /> */}
      <h2 className={styles.CardGrid__serviceCardTitle}>{title}</h2>
      <p className={styles.CardGrid__secondaryCardContent}>{content}</p>
    </div>
  );
};

export default Service;
