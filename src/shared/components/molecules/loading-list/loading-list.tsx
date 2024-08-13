/* ***package imports above this***  */

import LoadingListItem from "@shared/components/atoms/loading-list-item";
/* ***components imports above this***  */

/* ***libs, utils, custom-hooks imports above this***  */

/* ***configs imports above this***  */

/* ***enums, consts imports above this***  */

/* ***types imports above this***  */

import styles from "./loading-list.module.css";
/* ***style and styled components imports above this***  */

interface ILoadingListProps {
  itemCount: number;
}
/* ***local declarations above this***  */

export default function LoadingList(props: ILoadingListProps) {
  const { itemCount } = props;
  /* ***props decustructions above this***  */

  /* ***data selectors above this***  */

  /* ***hooks initializations above this***  */

  /* ***state initializations above this***  */

  /* ***side effects definitions above this***  */

  /* ***memoised functions initializations above this***  */

  /* ***memoised variables initializations above this***  */

  /* ***internal declarations, if necessary, above this***  */

  /* ***conditional renderings above this***  */

  return (
    <ul className={styles["LoadingList-container"]}>
      {new Array(itemCount).fill(itemCount).map((_ele, idx) => {
        return (
          <li key={`loading-item-${idx}`}>
            <LoadingListItem />
          </li>
        );
      })}
    </ul>
  );
}
