import { Button, Result } from "antd";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
/* ***package imports above this***  */

/* ***components imports above this***  */

/* ***libs, utils, custom-hooks imports above this***  */

/* ***configs imports above this***  */

import SearchNavObject, {
  SearchErrorHandleObject,
} from "@package/search/search.constants";
/* ***enums, consts imports above this***  */

import { DataFetchStore } from "@shared/types";
/* ***types imports above this***  */

/* ***style and styled components imports above this***  */

interface IErrorProps {
  error: DataFetchStore["error"];
  code: DataFetchStore["code"];
}

/* ***local declarations above this***  */

export default function Error(props: IErrorProps) {
  const { code, error } = props;
  /* ***props decustructions above this***  */

  /* ***data selectors above this***  */

  const navigate = useNavigate();
  /* ***hooks initializations above this***  */

  /* ***state initializations above this***  */

  /* ***side effects definitions above this***  */
  const onRestart = useCallback(() => {
    navigate(SearchNavObject.path);
  }, [navigate]);
  /* ***memoised functions initializations above this***  */

  /* ***memoised variables initializations above this***  */

  /* ***internal declarations, if necessary, above this***  */

  /* ***conditional renderings above this***  */

  return (
    <Result
      status={code ? SearchErrorHandleObject[code].errStatus : 500}
      title={
        code
          ? SearchErrorHandleObject[code].errMessage
          : "Sorry, something went wrong."
      }
      subTitle={error || "Sorry, something went wrong."}
      extra={
        <Button type="primary" onClick={onRestart}>
          Start Searching again
        </Button>
      }
    />
  );
}
