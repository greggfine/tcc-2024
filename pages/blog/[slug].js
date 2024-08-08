import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/legacy/image";
import Link from "next/link";
import Head from "next/head";
import HitCounter from "../../components/HitCounter";

import Button from "components/Button.tsx";
import CodeBlock from "components/CodeBlock.tsx";
import YouTube from "components/YouTube.tsx";
import Ad from "components/Ad.tsx";
import styles from "./[slug].module.scss";

import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { basePath } from "basePath";

// const ResponsiveImage = (props) => (
//   <Image alt={props.alt} layout="responsive" {...props} />
// );

const ResponsiveImage = (props) => {
  let src = props.src;

  if (process.env.NODE_ENV === "production") {
    // Prepend the basePath for production
    src = `${basePath}${src}`;
  }

  return <Image alt={props.alt} {...props} src={src} />;
};

import "highlight.js/styles/atom-one-dark.css";

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

const PostPage = ({
  frontMatter: {
    title,
    date,
    description,
    tags,
    author,
    thumbnailUrl,
    altText,
    url,
  },
  mdxSource,
}) => {
  return (
    <>
      <NextSeo
        description={description}
        title={`${title} | The Code Creative`}
        openGraph={{
          url: `https://www.thecodecreative.com/blog/${url}`,
          title: title,
          type: "article",
          description: description,
          images: [
            {
              url: `https://www.thecodecreative.com${thumbnailUrl}`,
              width: 1280,
              height: 720,
              alt: altText,
              type: "image/jpeg",
            },
          ],
          siteName: "The Code Creative",
        }}
        twitter={{
          handle: "@GreggFine",
          site: "@thecodecreative",
          cardType: "summary_large_image",
        }}
      />
      <div className={styles.Post} id="header-section">
        <article className={styles.Post__article}>
          <h1 className={styles.Post__header}>{title}</h1>
          <div className={styles.Post__meta}>
            <span className={styles.Post__author}>By {author}.</span>
            <span className={styles.Post__date}>{date}</span>
          </div>
          <div>
            {thumbnailUrl ? (
              <Image
                // src={thumbnailUrl}
                src={
                  process.env.NODE_ENV === "production"
                    ? `${basePath}${thumbnailUrl}`
                    : `${thumbnailUrl}`
                }
                alt={altText}
                width={700}
                height={420}
                layout="responsive"
                priority
              />
            ) : (
              ""
            )}
          </div>
          <ul className={styles.Post__tags}>
            {tags
              ? tags.sort().map((tag) => {
                  return (
                    <Link key={tag} href={`/tags/${tag}`}>
                      <li className={styles.Blog__tags__links}>{tag}</li>
                    </Link>
                  );
                })
              : ""}
          </ul>
          <HitCounter slug={url} />
          <MDXRemote
            {...mdxSource}
            components={{
              Button,
              CodeBlock,
              Image: ResponsiveImage,
              img: ResponsiveImage,
              YouTube,
              Ad,
              Error: (props) => {
                return (
                  <code
                    {...props}
                    style={{
                      color: "red",
                      borderTop: "1px solid #f1b6b6",
                      borderBottom: "1px solid #f1b6b6",
                      backgroundColor: "hsl(0deg 75% 97%)",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                    }}
                  />
                );
              },
              Syntax: (props) => {
                return (
                  <span
                    {...props}
                    style={{
                      backgroundColor: "#e8e9ff",
                      color: "hsl(280deg 68% 21%)",
                      padding: "2px 6px",
                      borderRadius: "0.3em",
                    }}
                  />
                );
              },
              Warning: (props) => {
                return (
                  <code
                    {...props}
                    style={{
                      color: "#573D0F",
                      borderTop: "1px solid yellow",
                      borderBottom: "1px solid yellow",
                      backgroundColor: "#FEFBE7",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                    }}
                  />
                );
              },
            }}
          />
        </article>
      </div>
    </>
  );
};
export default PostPage;
