import Link from "next/link";
import styles from "styles/audiogamessandbox.module.scss";
const AudioGamesSandbox = () => {
  return (
    <main className={styles.audiogamessandbox}>
      <h1 className={styles.audiogamessandbox__heading}>Audio Games Sandbox</h1>
      <section className={styles.audiogamessandbox__games}>
        <div className={styles.audiogamessandbox__game}>
          <h2 className={styles.audiogamessandbox__subheading}>
            Gain Challenge
          </h2>
          <Link href="https://gain-game.thecodecreative.com">Go to game</Link>
        </div>
        <div className={styles.audiogamessandbox__game}>
          <h2 className={styles.audiogamessandbox__subheading}>Modal Snake</h2>
          <Link href="https://modal-snake.thecodecreative.com">Go to game</Link>
        </div>
        <div className={styles.audiogamessandbox__game}>
          <h2 className={styles.audiogamessandbox__subheading}>Tap Rhythm </h2>
          <Link href="audiogames/taprhythm">Go to game</Link>
        </div>
        <div className={styles.audiogamessandbox__game}>
          <h2 className={styles.audiogamessandbox__subheading}>
            Orchestral Range
          </h2>
          <Link href="https://orchestral-range-game.thecodecreative.com/">
            Go to game
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AudioGamesSandbox;
