import styles from "styles/footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Social = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.Footer__socialLink}
    >
      <FontAwesomeIcon icon={icon} className={styles.Footer__social} />
    </a>
  );
};

export default Social;
