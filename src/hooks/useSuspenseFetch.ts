import { useEffect, useRef, useState } from "react";
import { api } from "../utils/api";
import { HttpStatusCode } from "axios";

type PromiseStatus = "pending" | "fulfilled" | "rejected";
const useSuspenseFetch = <T>(path: string) => {
  const [result, setResult] = useState<T | null>(null);
  const [status, setStatus] = useState<PromiseStatus | null>(null);
  const [promise, setPromise] = useState<Promise<T>>();
  const hasFetched = useRef<boolean>(false);
  const execFetch = () => {
    const fetchPromise = api
      .get(`${path}`)
      .then((res) => {
        if (res.status !== HttpStatusCode.Ok) {
          const error = new Error("API_ERROR");
          return Promise.reject(error);
        }
        setStatus("fulfilled");
        return res.data;
      })
      .then((res) => {
        setResult(res);
        return res;
      })
      .catch((err) => {
        const catchedError =
          err instanceof Error ? err : new Error("API_ERROR");
        console.error({ catchedError });
        setStatus("rejected");
      });
    setStatus("pending");
    setPromise(fetchPromise);
  };
  if (promise && status === "pending") {
    throw promise;
  }
  useEffect(() => {
    if (!hasFetched.current) {
      execFetch();
      hasFetched.current = true;
    }
  }, []);
  return { result };
};

export default useSuspenseFetch;
