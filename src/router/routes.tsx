import RootLayout from "../components/RootLayout";
import GlobalErrorPage from "../pages/error/GlobalErrorPage";
import HomePage from "../pages/HomePage";
import SigninPage from "../pages/SigninPage";
import MentoPage from "../pages/mento/MentoPage";
import NotFoundPage from "../pages/NotFoundPage";
import { ErrorBoundary } from "react-error-boundary";

const routes = (env: Record<string, string>) => {
  const { VITE_SERVER_BASE_URL } = env;
  console.log({ VITE_SERVER_BASE_URL });
  return [
    {
      path: "/",
      element: (
        <ErrorBoundary FallbackComponent={GlobalErrorPage}>
          <RootLayout />
        </ErrorBoundary>
      ),
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/signin",
          element: <SigninPage />,
        },
        { path: "/mento", element: <MentoPage /> },
      ],
    },
    { path: "*", element: <NotFoundPage /> },
  ];
};
export default routes;