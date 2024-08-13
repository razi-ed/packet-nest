import { Empty } from "antd";
/* ***package imports above this***  */

import ListItem from "@shared/components/atoms/list-item";
/* ***components imports above this***  */

/* ***libs, utils, custom-hooks imports above this***  */

/* ***configs imports above this***  */

/* ***enums, consts imports above this***  */

import { Package } from "@package/package.type";
/* ***types imports above this***  */

import styles from "./list.module.css";
/* ***style and styled components imports above this***  */

interface IListProps {
  data?: Package[] | null;
}

/* ***local declarations above this***  */

export default function List(props: IListProps) {
  const { data } = props;
  /* ***props decustructions above this***  */

  /* ***data selectors above this***  */

  /* ***hooks initializations above this***  */

  /* ***state initializations above this***  */

  /* ***side effects definitions above this***  */

  /* ***memoised functions initializations above this***  */

  /* ***memoised variables initializations above this***  */

  /* ***internal declarations, if necessary, above this***  */

  if (!data) {
    return (
      <div className={styles["List-empty-container"]}>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </div>
    );
  }
  /* ***conditional renderings above this***  */

  return (
    <ul className={styles["List-container"]}>
      {data.map((pkg) => {
        return (
          <li key={pkg.package_manager_url}>
            <ListItem itemData={pkg} />
          </li>
        );
      })}
    </ul>
  );
}
