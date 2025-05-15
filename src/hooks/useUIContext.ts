import { Context, useContext } from "react";
import { ERROR_MSG } from "../consts/error";

const useUIContext = <T>(srcContext: Context<T>, domain: string) => {
  const context = useContext(srcContext);
  if (!context) {
    throw new Error(ERROR_MSG.INVALID_CONTEXT(domain));
  }
  return context;
};

export default useUIContext;
