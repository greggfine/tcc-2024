import Service from "./Service";
import styles from "styles/services.module.scss";
import { motion } from "framer-motion";

import services from "data/services.json";

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`${styles.CardGrid} cards`}
    >
      {services.map((service) => {
        return (
          <Service
            src={service.src}
            alt={service.alt}
            title={service.title}
            content={service.content}
            key={service.title}
          />
        );
      })}
    </motion.section>
  );
};

export default Services;
