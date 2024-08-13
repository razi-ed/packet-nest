import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { Skeleton } from "antd";
/* ***package imports above this***  */

import Pagination from "@shared/components/molecules/pagination/pagination";
/* ***components imports above this***  */

/* ***libs, utils, custom-hooks imports above this***  */

/* ***configs imports above this***  */

import { RequestStatus } from "@shared/constants";
import {
  ITEMS_PER_PAGE,
  SearchParamsDefaultValues,
  SearchParamsKeys,
} from "@package/search/search.constants";
/* ***enums, consts imports above this***  */

/* ***types imports above this***  */

import styles from "./result-list-pagination.module.css";
/* ***style and styled components imports above this***  */

interface ResultListPaginationProps {
  totalItems: number;
  status: RequestStatus;
}

/* ***local declarations above this***  */

export default function ResultListPagination(props: ResultListPaginationProps) {
  const { totalItems, status } = props;
  /* ***props decustructions above this***  */

  /* ***data selectors above this***  */

  const [searchParams, setSearchParams] = useSearchParams();
  /* ***hooks initializations above this***  */

  /* ***state initializations above this***  */

  /* ***side effects definitions above this***  */
  const handlePageChange: (newPage: number, itemsPerPage: number) => void =
    useCallback(
      (newPage) => {
        setSearchParams((searchParams) => {
          searchParams.set("page", newPage.toString());
          return searchParams;
        });
      },
      [setSearchParams]
    );
  /* ***memoised functions initializations above this***  */

  /* ***memoised variables initializations above this***  */

  const renderInnerContent = () => {
    switch (status) {
      case RequestStatus.IDLE:
      case RequestStatus.LOADING:
        return <Skeleton.Button active shape="round" style={{ width: 312 }} />;

      case RequestStatus.FAILED:
        return null;

      default:
        return (
          <Pagination
            totalItems={totalItems}
            currentPage={parseInt(
              searchParams.get(SearchParamsKeys.PAGE) ||
                SearchParamsDefaultValues.PAGE,
              10
            )}
            itemsPerPage={ITEMS_PER_PAGE}
            onPageChange={handlePageChange}
          />
        );
    }
  };
  /* ***internal declarations, if necessary, above this***  */

  /* ***conditional renderings above this***  */

  return (
    <aside className={styles["ResultListPagination-container"]}>
      {renderInnerContent()}
    </aside>
  );
}
