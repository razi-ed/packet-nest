import React, { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import {
  SearchParamsDefaultValues,
  SearchParamsKeys,
} from "@package/search/search.constants";
/* ***package imports above this***  */

import SearchInput from "@shared/components/molecules/search-input";
/* ***components imports above this***  */

/* ***libs, utils, custom-hooks imports above this***  */

/* ***configs imports above this***  */

/* ***enums, consts imports above this***  */

/* ***types imports above this***  */

import styles from "./package-search-input.module.css";
/* ***style and styled components imports above this***  */

/* ***local declarations above this***  */

export default function PackageSearchInput() {
  /* ***props decustructions above this***  */

  /* ***data selectors above this***  */

  const [searchParams, setSearchParams] = useSearchParams();
  /* ***hooks initializations above this***  */

  /* ***state initializations above this***  */

  /* ***side effects definitions above this***  */
  const handleSearchInputChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        setSearchParams((searchParams) => {
          const currentSearchValue = e.target.value;
          if (currentSearchValue) {
            searchParams.delete("language");
            searchParams.set(SearchParamsKeys.QUERY, currentSearchValue);
          } else {
            searchParams.delete(SearchParamsKeys.QUERY);
            searchParams.set(
              SearchParamsKeys.LANGUAGE,
              SearchParamsDefaultValues.LANGUAGE
            );
          }
          return searchParams;
        });
      },
      [setSearchParams]
    );
  /* ***memoised functions initializations above this***  */

  /* ***memoised variables initializations above this***  */

  /* ***internal declarations, if necessary, above this***  */

  /* ***conditional renderings above this***  */

  return (
    <aside className={styles["PackageSearchInput-container"]}>
      <SearchInput
        name={SearchParamsKeys.QUERY}
        onChange={handleSearchInputChange}
        placeholder="Search Package"
        defaultValue={searchParams.get(SearchParamsKeys.QUERY) || ""}
      />
    </aside>
  );
}
