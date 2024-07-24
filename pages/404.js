import Link from "next/link";
import Image from "next/image";
import styles from "styles/404.module.scss";
import gregg from "@/images/404/gregg-scratching-head.jpg";
import Button from "react-bootstrap/Button";

const PageNotFound = () => {
  return (
    <section className={styles.Error}>
      <h1 className={styles.Error__header}>Oh Snap!</h1>
      <p className={styles.Error__para}>(Page Not Found)</p>

      <div className={styles.Error__linkgroup}>
        <Link href="/">
          <Button
            variant="outline-primary"
            className={styles.Error__linkgroup__link}
          >
            Back to The Code Creative
          </Button>
        </Link>
        <Link href="/courses">
          <Button
            variant="outline-primary"
            className={styles.Error__linkgroup__link}
          >
            Check out some courses!!
          </Button>
        </Link>
      </div>
      <Image src={gregg} className={styles.Error__img} />
    </section>
  );
};

export default PageNotFound;
