import {
  ForkOutlined,
  HistoryOutlined,
  RocketOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
/* ***package imports above this***  */

/* ***components imports above this***  */

import {
  convertToRelativeDuration,
  extractGithubRepoOwner,
} from "@shared/utils";
/* ***libs, utils, custom-hooks imports above this***  */

/* ***configs imports above this***  */

/* ***enums, consts imports above this***  */

import { Package } from "@package/package.type";
/* ***types imports above this***  */

import styles from "./list-item.module.css";
/* ***style and styled components imports above this***  */

interface IListItemProps {
  itemData: Package;
}

/* ***local declarations above this***  */

export default function ListItem(props: IListItemProps) {
  const { itemData } = props;
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
    <article className={styles["ListItem-container"]}>
      <Typography.Title level={5} className={styles["ListItem-reduced-margin"]}>
        {itemData.name}
      </Typography.Title>
      <Typography.Paragraph
        ellipsis={{
          rows: 1,
        }}
        className={styles["ListItem-reduced-margin"]}
      >
        {itemData.description}
      </Typography.Paragraph>
      <aside className={styles["ListItem-stats"]}>
        <div
          className={styles["ListItem-stats-entry"]}
          title="Package repo owner"
        >
          <StarOutlined />
          {itemData.stars}
        </div>
        <div
          className={styles["ListItem-stats-entry"]}
          title="Package repo owner"
        >
          <ForkOutlined />
          {itemData.forks}
        </div>
        <div
          className={styles["ListItem-stats-entry"]}
          title="Package repo owner"
        >
          <UserOutlined />
          {extractGithubRepoOwner(itemData.repository_url)}
        </div>
        <div
          className={styles["ListItem-stats-entry"]}
          title="Latest stable release version"
        >
          <RocketOutlined />
          {`v${itemData.latest_stable_release_number}`}
        </div>
        <div
          className={styles["ListItem-stats-entry"]}
          title="Dependent repos count"
        >
          <HistoryOutlined />
          {convertToRelativeDuration(
            itemData.latest_stable_release_published_at
          )}
        </div>
      </aside>
    </article>
  );
}
