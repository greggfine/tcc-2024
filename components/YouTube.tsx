import styles from "styles/youtube.module.scss";
import Link from "next/link";
import Image from "next/image";

const YouTube = ({ id, imgSrc, alt }) => {
  return (
    <div className={styles.YouTube}>
      <Link href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener" 
      >
        <Image 
       quality={50} 
        src={imgSrc} alt={alt} width={400} height={225}></Image>
      </Link>
    </div>
  );
};

export default YouTube;
