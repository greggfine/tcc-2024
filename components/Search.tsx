// @ts-nocheck
import styles from "styles/search.module.scss";
const Search = ({ userInput, setUserInput }) => {
  return (
    <form className={styles.Search}>
      <input
        type="text"
        placeholder="search for topic"
        value={userInput}
        onInput={(e) => setUserInput(e.target.value.toLowerCase())}
      />
      <button
        className={styles.Search__resetBtn}
        onClick={() => setUserInput("")}
      >
        &#10006;
      </button>
    </form>
  );
};

export default Search;
