import { IPaginationProps } from "../../interfaces";
import styles from "./styles.module.css";



export const Pagination = ({ 
  totalPages, 
  handlePageClick, 
  handlePreviousPage, 
  handleNextPage, 
  currentPage 
}: IPaginationProps) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
        className={styles.arrow}
      >
        {"<"}
      </button>

      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              disabled={index + 1 === currentPage}
              className={styles.pageNumber}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
};