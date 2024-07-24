import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import websiteStyles from "styles/website.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const Site = ({ website }) => (
  <>
    <motion.div
      className={websiteStyles.Card__myCard}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Card className={websiteStyles.Card} key={website.name}>
        <a
          href={website.link}
          target="_blank"
          className={websiteStyles.Card__cardLink}
          rel="noopener noreferrer"
        >
          <div className={websiteStyles.Card__innerCard}>
            <Image
              src={website.img}
              width={320}
              height={280}
              className={websiteStyles.Card__cardImg}
              quality={50}
              priority={true}
              placeholder="blur"
              alt={website.altText}
            />
            <Card.Body>
              <h4 className={websiteStyles.Card__cardTitle}>{website.name}</h4>
              <p className={websiteStyles.Card__cardText}>
                {website.description}
              </p>
              <Button
                variant="outline-primary"
                className={websiteStyles.Card__cardBtn}
              >
                VIEW PROJECT
              </Button>
            </Card.Body>
          </div>
        </a>
      </Card>
    </motion.div>
  </>
);

export default Site;
