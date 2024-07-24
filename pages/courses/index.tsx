import styles from "styles/courses.module.scss";
import { motion } from "framer-motion";
import Course from "components/Course";
import courses from "data/courses.json";
import { NextSeo } from "next-seo";
const Courses = () => {
  return (
    <>
      <NextSeo
        title="Web Development Tutorials and Courses | The Code Creative"
        description="The Code Creative courses help you take your web development skills to the next level, master JavaScript, and ace your job interview."
      />
      <motion.main
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75 }}
        className={styles.courses}
        id="header-section"
      >
        {courses.map((course) => {
          return (
            <Course
              imgSrc={course.imgSrc}
              imgAlt={course.imgAlt}
              title={course.title}
              subtitle={course.subtitle}
              description={course.description}
              link={course.link}
              linkText={course.linkText}
              imgWidth={course.imgWidth}
              imgHeight={course.imgHeight}
              key={course.title}
            />
          );
        })}
      </motion.main>
    </>
  );
};

export default Courses;
