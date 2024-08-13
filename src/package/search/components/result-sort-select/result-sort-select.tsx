import { Skeleton, Typography } from "antd";
import { useSearchParams } from "react-router-dom";
/* ***package imports above this***  */

import Select from "@shared/components/molecules/select";
/* ***components imports above this***  */

import { getPaginatedResultsShownRange } from "@shared/utils";
/* ***libs, utils, custom-hooks imports above this***  */

/* ***configs imports above this***  */

import { RequestStatus } from "@shared/constants";
import {
  ResultsSortOptions,
  SearchParamsDefaultValues,
  SearchParamsKeys,
} from "@package/search/search.constants";
/* ***enums, consts imports above this***  */

/* ***types imports above this***  */

import styles from "./result-sort-select.module.css";
/* ***style and styled components imports above this***  */

interface IResultSortSelectProps {
  totalItems: number;
  status: RequestStatus;
}

/* ***local declarations above this***  */

export default function ResultSortSelect(props: IResultSortSelectProps) {
  const { status, totalItems } = props;
  /* ***props decustructions above this***  */

  /* ***data selectors above this***  */

  const [searchParams, setSearchParams] = useSearchParams();
  /* ***hooks initializations above this***  */

  /* ***state initializations above this***  */

  /* ***side effects definitions above this***  */

  /* ***memoised functions initializations above this***  */

  /* ***memoised variables initializations above this***  */

  const renderHelperText = () => {
    const pageNumber = parseInt(
      searchParams.get(SearchParamsKeys.PAGE) || SearchParamsDefaultValues.PAGE,
      10
    );
    switch (status) {
      case RequestStatus.IDLE:
      case RequestStatus.LOADING:
        return <Skeleton.Button active size={"small"} shape={"round"} block />;

      case RequestStatus.FAILED:
        return <Typography.Text type="secondary">N/A</Typography.Text>;

      default:
        return (
          <Typography.Text type="secondary">
            {getPaginatedResultsShownRange(pageNumber, totalItems)}
          </Typography.Text>
        );
    }
  };

  /* ***internal declarations, if necessary, above this***  */

  /* ***conditional renderings above this***  */

  return (
    <aside className={styles["ResultSortSelect-container"]}>
      <div className={styles["ResultSortSelect-helpertext-container"]}>
        {renderHelperText()}
      </div>
      <div className={styles["ResultSortSelect-select-container"]}>
        <div className={styles["ResultSortSelect-label-container"]}>
          <Typography.Text type="secondary">Sort By:</Typography.Text>
        </div>
        <div className={styles["ResultSortSelect-element-container"]}>
          <Select
            options={ResultsSortOptions}
            placeholder="Relevance"
            onChange={(e) => {
              setSearchParams((searchParams) => {
                searchParams.set(SearchParamsKeys.SORT, e);
                return searchParams;
              });
            }}
            defaultValue={searchParams.get(SearchParamsKeys.SORT) || ""}
          />
        </div>
      </div>
    </aside>
  );
}
