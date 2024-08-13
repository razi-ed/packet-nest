import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
/* ***package imports above this***  */

import PackageSearchInput from "./components/package-search-input";
import ResultSortSelect from "./components/result-sort-select";
import ResultList from "./components/result-list";
import ResultListPagination from "./components/result-list-pagination";
/* ***components imports above this***  */

import useDebouncedPackageSearch from "./hooks/use-debounced-package-search";
/* ***libs, utils, custom-hooks imports above this***  */

/* ***configs imports above this***  */

import {
  SEARCH_DEBOUNCE_DELAY,
  SearchParamsDefaultValues,
} from "./search.constants";
/* ***enums, consts imports above this***  */

import { Package } from "../package.type";
/* ***types imports above this***  */

import styles from "./search.module.css";
/* ***style and styled components imports above this***  */

/* ***local declarations above this***  */

export default function SearchPage() {
  /* ***props decustructions above this***  */

  const [searchParams] = useSearchParams();
  const { data, status, headers, error } = useDebouncedPackageSearch<Package[]>(
    searchParams,
    SEARCH_DEBOUNCE_DELAY
  );
  /* ***hooks initializations above this***  */

  /* ***state initializations above this***  */

  /* ***side effects definitions above this***  */

  /* ***memoised functions initializations above this***  */

  /* ***memoised variables initializations above this***  */

  const totalItems = useMemo(() => {
    return parseInt(headers?.total || SearchParamsDefaultValues.TOTAL, 10);
  }, [headers?.total]);
  /* ***internal declarations, if necessary, above this***  */

  /* ***conditional renderings above this***  */

  return (
    <section className={styles["SearchPage-container"]}>
      <PackageSearchInput />
      <ResultSortSelect status={status} totalItems={totalItems} />
      <ResultList data={data} status={status} error={error} />
      <ResultListPagination status={status} totalItems={totalItems} />
    </section>
  );
}
