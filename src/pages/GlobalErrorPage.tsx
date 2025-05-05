import { FC } from "react";
import { FallbackProps } from "react-error-boundary";
import { getErrorMessage } from "../utils/error";

const GlobalErrorPage: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const errorMessage = getErrorMessage(error);
  const handleClickGoHome = () => {
    window.location.href = "/";
  };
  return (
    <>
      <h2>GlobalErrorPage</h2>
      <div>{errorMessage}</div>
      <button onClick={handleClickGoHome}>홈으로</button>
      <button onClick={resetErrorBoundary}>재시도</button>
    </>
  );
};
export default GlobalErrorPage;
