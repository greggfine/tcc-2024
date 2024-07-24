import styles from "styles/pagination.module.scss";
const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  nextPage,
  prevPage,
  currentPage,
  userInputLength,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav
      className={styles.Pagination}
      style={{ display: userInputLength > 0 ? "none" : "block" }}
    >
      <ul className={styles.Pagination__numbers}>
        {currentPage > 1 ? (
          <li>
            <button
              onClick={() => {
                prevPage(currentPage);
              }}
              className={styles.Pagination__arrow}
            >
              &#8592;
            </button>
          </li>
        ) : (
          ""
        )}
        {pageNumbers.map((number) => {
          return (
            <li key={number} onClick={() => paginate(number)}>
              <button
                className={styles.Pagination__number}
                style={
                  number === currentPage
                    ? { backgroundColor: "#dcc3f880" }
                    : { backgroundColor: "#efefef" }
                }
              >
                {number}
              </button>
            </li>
          );
        })}
        {currentPage < pageNumbers[pageNumbers.length - 1] ? (
          <li>
            <button
              onClick={() => {
                nextPage(currentPage);
              }}
              className={styles.Pagination__arrow}
            >
              &#8594;
            </button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
