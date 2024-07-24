import Link from "next/link";
import Image from "next/legacy/image";
import styles from "./blog.module.scss";
import { getAllPosts } from "helpers/index.tsx";
import { useState } from "react";
import Pagination from "components/Pagination.tsx";
import { NextSeo } from "next-seo";
import Search from "components/Search.tsx";

export default function Blog({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const [userInput, setUserInput] = useState("");

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
  };
  const prevPage = (pageNumber) => {
    setCurrentPage(pageNumber - 1);
  };
  return (
    <>
      <NextSeo
        description="The Code Creative's web development blog is a fun and educational resource for coding, JavaScript, HTML, CSS, SEO and more."
        title="Blog | The Code Creative"
      />
      <main>
        <Search userInput={userInput} setUserInput={setUserInput} />
        <div className={styles.Blog} id="header-section">
          {posts
            .filter((post) => {
              //   return post.frontMatter.title.toLowerCase().includes(userInput);
              const title = post.frontMatter?.title || ""; // add a default value in case frontMatter is undefined
              return title.toLowerCase().includes(userInput);
            })
            .slice(indexOfFirstPost, indexOfLastPost)
            .map((post, idx) => (
              <Link href={"/blog/" + post.slug} passHref key={idx}>
                <div
                  style={{ maxWidth: "540px" }}
                  className={styles.Blog__post}
                >
                  <div className={styles.Blog__contentWrapper}>
                    <div className={styles.Blog__img}>
                      {post.frontMatter.thumbnailUrl ? (
                        <Image
                          src={post.frontMatter.thumbnailUrl}
                          alt={post.frontMatter.altText}
                          width={450}
                          height={275}
                          objectFit="contain"
                          priority
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
                                <Link
                                  key={tag}
                                  href={`/tags/${tag.replaceAll(" ", "-")}`}
                                  legacyBehavior
                                >
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
                      <p className={styles.Blog__date}>
                        Updated: {post.frontMatter.date}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          // currentPage={currentPage}
          currentPage={
            userInput.length > 0 && currentPage !== 1
              ? setCurrentPage(1)
              : currentPage
          }
          userInputLength={userInput.length}
        />
      </main>
    </>
  );
}

// This gets all the files at build time and builds them out statically
export const getStaticProps = async () => {
  const posts = getAllPosts().sort((a, b) => {
    const date1 = new Date(a.frontMatter.date);
    const date2 = new Date(b.frontMatter.date);
    return date2 - date1;
  });
  return {
    props: {
      posts,
    },
  };
};
