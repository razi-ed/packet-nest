import { Button, Result } from "antd";
/* ***package imports above this***  */

import LoadingList from "@shared/components/molecules/loading-list";
import List from "@shared/components/molecules/list";
/* ***components imports above this***  */

/* ***libs, utils, custom-hooks imports above this***  */

/* ***configs imports above this***  */

import { RequestStatus } from "@shared/constants";
import { ITEMS_PER_PAGE } from "@package/search/search.constants";
/* ***enums, consts imports above this***  */

import { Package } from "@package/package.type";
/* ***types imports above this***  */

/* ***style and styled components imports above this***  */

interface IResultListProps {
  status: RequestStatus;
  data?: Package[] | null;
  error?: string | null;
}

/* ***local declarations above this***  */

export default function ResultList(props: IResultListProps) {
  const { data, status, error } = props;
  /* ***props decustructions above this***  */

  /* ***data selectors above this***  */

  /* ***hooks initializations above this***  */

  /* ***state initializations above this***  */

  /* ***side effects definitions above this***  */

  /* ***memoised functions initializations above this***  */

  /* ***memoised variables initializations above this***  */

  const renderContent = () => {
    switch (status) {
      case RequestStatus.IDLE:
      case RequestStatus.LOADING:
        return <LoadingList itemCount={ITEMS_PER_PAGE} />;

      case RequestStatus.FAILED:
        return (
          <Result
            status="500"
            title="500"
            subTitle={error || "Sorry, something went wrong."}
            extra={<Button type="primary">Start Searching again</Button>}
          />
        );

      default:
        return <List data={data} />;
    }
  };
  /* ***internal declarations, if necessary, above this***  */

  /* ***conditional renderings above this***  */

  return <main>{renderContent()}</main>;
}
