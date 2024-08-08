import styles from "styles/testimonials.module.scss";
import testimonialData from "data/testimonials.json";
import { motion } from "framer-motion";
import Image from "next/image";
const basePath = "/tcc-2024";

const Testimonials = () => {
  return (
    <>
      <h1 className={styles.testimonials__heading}>
        What Our <span>Clients Say</span>
      </h1>
      <div className={styles.testimonials}>
        {testimonialData.map((testimonial, idx) => {
          return (
            <motion.div
              className={styles.testimonials__card}
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <i className="fas fa-quote-left"></i>
              <p className={styles.testimonials__card__quote}>
                {testimonial.quote}
              </p>
              <Image
                src={`${basePath}${testimonial.img}`}
                alt={`The Code Creative client ${testimonial.name}`}
                className={styles.testimonials__card__img}
                width={240}
                height={240}
              />
              {/* <img
                src={testimonial.img}
                alt={`The Code Creative client ${testimonial.name}`}
                className={styles.testimonials__card__img}
              /> */}
              <div className={styles.testimonials__card__infoWrapper}>
                <p className={styles.testimonials__card__name}>
                  {testimonial.name}
                </p>
                <p className={styles.testimonials__card__company}>
                  {testimonial.company}
                </p>
              </div>
              <div className={styles.testimonials__card__shape}></div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Testimonials;
