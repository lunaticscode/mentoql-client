import RootLayout from "@components/RootLayout";
import GlobalErrorPage from "@pages/error/GlobalErrorPage";
import { ErrorBoundary } from "react-error-boundary";
function App() {
  return (
    <ErrorBoundary FallbackComponent={GlobalErrorPage}>
      <RootLayout></RootLayout>
    </ErrorBoundary>
  );
}

export default App;
