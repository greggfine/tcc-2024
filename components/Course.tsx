import Image from "next/legacy/image";
import dataURL from "components/dataURL";
import styles from "styles/courses.module.scss";
const Course = ({
  imgSrc,
  imgAlt,
  title,
  subtitle,
  description,
  link,
  linkText,
  imgWidth,
  imgHeight,
}) => {
  return (
    <div className={styles.courses__course}>
      <Image
        src={imgSrc}
        className={styles.courses__img}
        priority={true}
        placeholder="blur"
        blurDataURL={dataURL}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
      />
      <div className={styles.courses__courseInfoWrapper}>
        <div className={styles.courses__courseInfoHeader}>
          <p>{subtitle}</p>
          <h2>{title}</h2>
        </div>
        <div className={styles.courses__courseInfoBody}>
          <p>{description}</p>
          <a
            href={link}
            target="_blank"
            className={styles.courses__anchor}
            rel="noopener noreferrer"
          >
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};
export default Course;
