import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, List, Card, Button } from "antd";
/* ***package imports above this***  */

/* ***components imports above this***  */

/* ***libs, utils, custom-hooks imports above this***  */

/* ***configs imports above this***  */

import { FeaturesContent, HeroContent } from "./home.constants";
import SearchNavObject from "@package/search/search.constants";
/* ***enums, consts imports above this***  */

/* ***types imports above this***  */

import styles from "./home.module.css";
/* ***style and styled components imports above this***  */

/* ***local declarations above this***  */

export default function HomePage() {
  /* ***props decustructions above this***  */

  /* ***data selectors above this***  */

  const navigate = useNavigate();
  /* ***hooks initializations above this***  */

  /* ***state initializations above this***  */

  /* ***side effects definitions above this***  */

  const onStart = useCallback(() => {
    navigate(SearchNavObject.path);
  }, [navigate]);
  /* ***memoised functions initializations above this***  */

  /* ***memoised variables initializations above this***  */

  /* ***internal declarations, if necessary, above this***  */

  /* ***conditional renderings above this***  */

  return (
    <section className={styles["HomePage-container"]}>
      <Typography.Title level={1}>{HeroContent.title}</Typography.Title>
      <Typography.Text>{HeroContent.subTitle}</Typography.Text>
      <div className={styles["HomePage-cta-container"]}>
        <Button type="primary" size="large" shape="round" onClick={onStart}>
          {HeroContent.ctaLabel}
        </Button>
      </div>
      <div>
        <List
          dataSource={FeaturesContent}
          renderItem={(item) => (
            <List.Item key={item.key}>
              <Card title={item.title}>{item.subTitle}</Card>
            </List.Item>
          )}
        />
      </div>
    </section>
  );
}
