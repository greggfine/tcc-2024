import styles from "styles/navigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export const NavItem = ({ handleClick, href, name, pathname }) => {
  const router = useRouter();
  return (
    <li className={styles.siteHeader__navListItem}>
      <Link
        href={href}
        className={
          router.pathname == pathname
            ? `${styles.siteHeader__listItem} ${styles.siteHeader__listItem__active}`
            : styles.siteHeader__listItem
        }
      >
        {name}
      </Link>
    </li>
  );
};

export const SideNavItem = ({ handleClick, href, name, pathname }) => {
  return (
    <Link
      href={href}
      className={styles.siteHeader__listItem}
      onClick={handleClick}
    >
      {name}
    </Link>
  );
};
