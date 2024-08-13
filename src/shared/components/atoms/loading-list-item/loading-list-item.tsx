import { Skeleton } from "antd";
/* ***package imports above this***  */

/* ***components imports above this***  */

/* ***libs, utils, custom-hooks imports above this***  */

/* ***configs imports above this***  */

/* ***enums, consts imports above this***  */

/* ***types imports above this***  */

import styles from "./loading-list-item.module.css";
/* ***style and styled components imports above this***  */

/* ***local declarations above this***  */

export default function LoadingListItem() {
  /* ***props decustructions above this***  */

  /* ***data selectors above this***  */

  /* ***hooks initializations above this***  */

  /* ***state initializations above this***  */

  /* ***side effects definitions above this***  */

  /* ***memoised functions initializations above this***  */

  /* ***memoised variables initializations above this***  */

  const renderStats = () => {
    const statsEntryCount = 4;
    const entries = new Array(statsEntryCount)
      .fill(statsEntryCount)
      .map((_ele, idx) => (
        <div
          key={`loading-item-stat-${idx}`}
          className={styles["LoadingListItem-stats-entry"]}
        >
          <Skeleton.Avatar shape="circle" size="small" active />
          <Skeleton.Button shape="round" size="small" active />
        </div>
      ));
    return <aside className={styles["LoadingListItem-stats"]}>{entries}</aside>;
  };
  /* ***internal declarations, if necessary, above this***  */

  /* ***conditional renderings above this***  */

  return (
    <article className={styles["LoadingListItem-container"]}>
      <Skeleton.Button active shape="round" style={{ width: 270 }} />
      {renderStats()}
    </article>
  );
}
