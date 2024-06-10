import styles from "./styles.module.css";
import { NewsFilters } from "../NewsFilters/NewsFilters";
import { Pagination } from "../Pagination/Pagination";
import NewsList from "../NewsList/NewsList";
import { TOTAL_PAGES } from "../../constants/constants";


export const NewsByFilters = ({filters, changeFilter, isLoading, news}) => {

        const handleNextPage = () => {
          if (filters.page_number < TOTAL_PAGES) {
            changeFilter("page_number", filters.page_number + 1);
          }
        };

        const handlePreviousPage = () => {
          if (filters.page_number > 1) {
            changeFilter("page_number", filters.page_number - 1);
          }
        };

        const handlePageClick = (pageNumber) => {
          changeFilter("page_number", pageNumber);
        };



  return (
    <section className={styles.section}>

        <NewsFilters filters={filters} changeFilter={changeFilter} />
      

      <Pagination
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />
      <NewsList isLoading={isLoading} news={news} />
      <Pagination
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />
    </section>
  );
};