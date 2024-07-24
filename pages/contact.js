// FORMSPREE ENDPOINT:  https://formspree.io/xyynberj

import React, { useState } from "react";
import axios from "axios";
import styles from "styles/contact.module.scss";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Image from "next/image";
import gregg from "@/images/contact/the-code-creative-developer-gregg-fine.jpg";
import computerSetup from "@/images/contact/unsplash/web-design-computer-setup.jpg";

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/xyynberj",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <>
      <NextSeo
        title="Contact Us About Your Website or App | New Jersey | The Code Creative"
        description="The Code Creative is happy to hear from you! Contact us to discuss your project using the form below."
      />
      <main className={styles.contactFormMain} id="header-section">
        <div className={styles.formWrapper}>
          <motion.h1
            initial={{ x: -50, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
            }}
            className={styles.formTitle}
          >
            Let's Discuss Your Project!
          </motion.h1>
          <motion.p
            className={styles.subMessage}
            initial={{ x: 20, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Ready to get started on your new website or app? Or maybe you're
            looking to optimize and redesign your current site? Let's start a
            conversation. I look forward to hearing from you!
          </motion.p>
          <form onSubmit={handleOnSubmit} className={styles.contactForm}>
            <label htmlFor="name" className={styles.contactFormLabel}>
              Name
            </label>
            <input
              id="name"
              type="name"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.name}
              className={styles.contactFormInput}
            />
            <label htmlFor="email" className={styles.contactFormLabel}>
              Email
            </label>
            <input
              id="email"
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
              className={styles.contactFormInput}
            />
            <label htmlFor="message" className={styles.contactFormLabel}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleOnChange}
              required
              value={inputs.message}
              className={styles.contactFormTextArea}
            />
            <button
              type="submit"
              disabled={status.submitting}
              className={styles.contactFormBtn}
            >
              {!status.submitting
                ? !status.submitted
                  ? "Send a message"
                  : "Message sent!"
                : "Submitting..."}
            </button>
          </form>
          {status.info.error && (
            <div className={styles.error}>Error: {status.info.msg}</div>
          )}
          {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </div>
        <div className={styles.Contact__bottomWrapper}>
          <div className={styles.Contact__additional}>
            <p>
              The Code Creative
              <br />
              <br />
              522 Summit Ave.
              <br />
              Westfield, NJ 07090
              <br />
              <br /> gregg@thecodecreative.com
            </p>
          </div>
          <div className={styles.Contact__colorDiv}>
            <div className={styles.Contact__colorDivItem}>
              <Image
                src={gregg}
                alt="The Code Creative web designer Gregg Fine working in his development studio in New Jersey"
              />
            </div>
          </div>
          <div className={styles.Contact__colorDiv}>
            <div className={styles.Contact__colorDivItem}>
              <Image src={computerSetup} alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
