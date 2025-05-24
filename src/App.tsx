import RootLayout from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import MentoPage from "./pages/MentoPage";
import MentoSeedPage from "./pages/mento/MentoSeed";
import NotFoundaPage from "./pages/NotFoundPage";
import SchedulePage from "./pages/SchedulePage";
import SigninPage from "./pages/SigninPage";
import { Routes, Route } from "react-router-dom";
import CreateQueryRoom from "./pages/mento/CreateQueryRoom";
import QueryRoomPage from "./pages/QueryRoomPage";
import { ErrorBoundary } from "react-error-boundary";
import GlobalErrorPage from "./pages/GlobalErrorPage";
import SigninSuccessPage from "./pages/SigninSuccessPage";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import appQueryClient from "./utils/queryClient";

function App() {
  return (
    <QueryClientProvider client={appQueryClient}>
      <ErrorBoundary FallbackComponent={GlobalErrorPage}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="query-room/:id" element={<QueryRoomPage />} />
            <Route path="mento" element={<MentoPage />} />
            <Route path="mento-cqr" element={<CreateQueryRoom />} />
            <Route path="mento-seed" element={<MentoSeedPage />} />
            <Route path="schedule" element={<SchedulePage />} />
          </Route>
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signin-success" element={<SigninSuccessPage />} />
          <Route path="*" element={<NotFoundaPage />} />
        </Routes>
      </ErrorBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
