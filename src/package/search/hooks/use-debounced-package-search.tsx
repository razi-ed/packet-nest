import { useReducer, useEffect, useCallback, useRef } from "react";
import { AxiosResponseHeaders } from "axios";

import { DataFetchStore } from "@shared/types";
import { RequestStatus } from "@shared/constants";
import fetchPackageList from "@package/package.api";

type Action<T> =
  | { type: "FETCH_INIT" }
  | {
      type: "FETCH_SUCCESS";
      payload: { data: T; headers: Partial<AxiosResponseHeaders> };
    }
  | { type: "FETCH_FAILURE"; error: string };

function dataFetchReducer<T>(
  state: DataFetchStore<T>,
  action: Action<T>
): DataFetchStore<T> {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        status: RequestStatus.LOADING,
        error: null,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        status: RequestStatus.SUCCEEDED,
        data: action.payload.data,
        headers: action.payload.headers,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        status: RequestStatus.FAILED,
        error: action.error,
        data: null,
        headers: null,
      };
    default:
      throw new Error("Unhandled action type");
  }
}

const useDebouncedPackageSearch = <T,>(
  searchParams: URLSearchParams,
  debounceDelay: number = 500
): DataFetchStore<T> => {
  const [state, dispatch] = useReducer(dataFetchReducer<T>, {
    data: null,
    headers: null,
    status: RequestStatus.IDLE,
    error: null,
  });

  const debounceTimeout = useRef<number | null>(null);

  const makeRequest = useCallback(() => {
    dispatch({ type: "FETCH_INIT" });

    fetchPackageList(searchParams)
      .then((response) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: { data: response.data, headers: response.headers },
        });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILURE", error: err.message });
      });
  }, [searchParams]);

  useEffect(() => {
    if (debounceTimeout.current !== null) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = window.setTimeout(() => {
      makeRequest();
    }, debounceDelay);

    return () => {
      if (debounceTimeout.current !== null) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [makeRequest, debounceDelay]);

  return {
    data: state.data,
    headers: state.headers,
    status: state.status,
    error: state.error,
  };
};

export default useDebouncedPackageSearch;
