import styles from "styles/footer.module.scss";

import Social from "components/Social";
import socials from "data/socials.json";

import ScrollToTop from "components/ScrollToTop";
import { basePath } from "basePath";

import {
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default () => (
  <footer className={styles.Footer}>
    <div className={styles.Footer__logoWrapper}>
      <img
        src={
          process.env.NODE_ENV === "production"
            ? `${basePath}/images/footer/logo/the-code-creative_logo-dark_003.svg`
            : `/images/footer/logo/the-code-creative_logo-dark_003.svg`
        }
        alt="The Code Creative Logo"
        width="200"
        height="100"
      />
    </div>

    <div className={styles.Footer__inner}>
      <p className={styles.Footer__copyright}>
        &copy;{new Date().getFullYear()} The Code Creative
      </p>
      <div className={styles.Footer__social}>
        {socials.map((social) => {
          return (
            <Social
              href={social.href}
              icon={
                social.icon === "twitter"
                  ? faTwitter
                  : social.icon === "youtube"
                  ? faYoutube
                  : faInstagram
              }
              key={social.href}
            />
          );
        })}
      </div>
    </div>
    <div className={styles.Footer__scrollUpWrapper}>
      <ScrollToTop />
    </div>
  </footer>
);
