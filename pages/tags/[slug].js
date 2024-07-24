import Head from "next/head";
import Link from "next/link";
import Image from "next/legacy/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styles from "../blog/blog.module.scss";
import { getAllPosts } from "helpers/index.tsx";
import { motion } from "framer-motion";
const Tags = ({ posts, slug }) => {
  return (
    <>
      <Head>
        <title>{`Tag: ${slug}`}</title>
      </Head>
      {/* <h1 className={styles.Blog__category}>Category | {slug}</h1> */}
      <h1 className={styles.Blog__categoryWrapper}>
        <div className={styles.Blog__categorytitle}>Category</div>{" "}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.Blog__categorytype}
        >
          {slug}
        </motion.div>
      </h1>
      <main>
        <div className={styles.Blog} id="header-section">
          {posts.map((post, idx) => (
            <Link href={"/blog/" + post.slug} passHref key={idx}>
              <div style={{ maxWidth: "540px" }} className={styles.Blog__post}>
                <div className={styles.Blog__contentWrapper}>
                  <div className={styles.Blog__img}>
                    {post.frontMatter.thumbnailUrl ? (
                      <Image
                        src={post.frontMatter.thumbnailUrl}
                        alt="thumbnail"
                        width={450}
                        height={275}
                        objectFit="cover"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className={styles.Blog__postText}>
                    <ul className={styles.Blog__tags}>
                      {post.frontMatter.tags
                        ? post.frontMatter.tags.sort().map((tag) => {
                            return (
                              <Link key={tag} href={`/tags/${tag}`}>
                                <li className={styles.Blog__tags__links}>
                                  {tag}
                                </li>
                              </Link>
                            );
                          })
                        : ""}
                    </ul>
                    <h5 className={styles.Blog__postTitle}>
                      {post.frontMatter.title}
                    </h5>
                    <p className={styles.Blog__author}>
                      By {post.frontMatter.author}
                    </p>
                    <p>Updated: {post.frontMatter.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const posts = getAllPosts().filter((post) => {
    return post.frontMatter.tags.includes(slug);
  });
  return {
    props: {
      slug,
      posts,
    },
  };
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  const tags = new Set(
    posts
      .map((post) => {
        return post.frontMatter.tags;
      })
      .flat()
  );
  const paths = Array.from(tags).map((tag) => {
    return {
      params: {
        slug: tag.toLowerCase(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default Tags;
