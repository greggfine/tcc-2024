import React, { useState, useEffect } from "react";
import Image from "next/image";
import chevron from "@/images/footer/chevron.png";
import styles from "styles/footer.module.scss";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <Image
          className={styles.Footer__scrollUp}
          id="scrollBackToTop"
          src={chevron}
          alt="scroll to top of page"
          onClick={goToTop}
        />
      )}{" "}
    </div>
  );
};
export default ScrollToTop;
