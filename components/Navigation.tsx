import styles from "styles/navigation.module.scss";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { NavItem, SideNavItem } from "./NavItem";
import navitems from "data/navitems.json";

const Navigation = () => {
  let [isOpen, setIsOpen] = useState(true);
  let [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [hasScrolled] = useState(false);
  const handleClick = () => {
    console.log("clic");
    setIsOpen(() => (isOpen = !isOpen));
    setIsSideMenuOpen(() => (isSideMenuOpen = !isSideMenuOpen));
  };
  return (
    <header
      className={hasScrolled ? styles.siteHeader : styles.siteHeader__init}
    >
      {/* HAMBURGER MENU */}
      <div
        className={
          isOpen
            ? styles.siteHeader__menuIcon
            : `${styles.siteHeader__menuIcon}
                ${styles.siteHeader__menuIcon__closeX}`
        }
        id="menu-icon"
        onClick={handleClick}
        style={
          hasScrolled ? { visibility: "hidden" } : { visibility: "visible" }
        }
      >
        <div className={styles.siteHeader__menuIcon__middle}></div>
      </div>

      <div
        id="side-menu"
        className={
          isSideMenuOpen
            ? `${styles.sideNav} ${styles.openSideMenu}`
            : styles.sideNav
        }
      >
        <ul className={styles.sideNavListItems}>
          {navitems.map((navItem) => {
            return (
              <SideNavItem
                href={navItem.href}
                handleClick={handleClick}
                name={navItem.name}
                pathname={navItem.pathname}
                key={navItem.name}
              />
            );
          })}
        </ul>
      </div>
      <div>
        <nav className={styles.siteHeader__nav}>
          <ul className={styles.siteHeader__navList}>
            <div className={styles.siteHeader__brandWrapper}>
              <Link href="/">
                <div
                  className={
                    hasScrolled
                      ? styles.siteHeader__brandName
                      : styles.siteHeader__brandNameInit
                  }
                >
                  <img
                    src={
                      hasScrolled
                        ? `./images/nav/logo/the-code-creative-logo-dark.svg`
                        : `./images/nav/logo/the-code-creative-logo-light.svg`
                    }
                    alt="The Code Creative logo"
                    width="200"
                    height="100"
                  />
                </div>
              </Link>
            </div>
            <div className={styles.siteHeader__listItemWrapper}>
              {navitems.map((navItem) => {
                return (
                  <NavItem
                    handleClick={handleClick}
                    href={navItem.href}
                    name={navItem.name}
                    pathname={navItem.pathname}
                    key={navItem.name}
                  />
                );
              })}
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navigation;
