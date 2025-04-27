import RootLayout from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import MentoPage from "./pages/mento/MentoPage";
import MentoSeedPage from "./pages/mento/MentoSeed";
import NotFoundaPage from "./pages/NotFoundPage";
import SchedulePage from "./pages/SchedulePage";
import SigninPage from "./pages/SigninPage";
import { Routes, Route } from "react-router-dom";
import CreateQueryRoom from "./pages/mento/CreateQueryRoom";
import QueryRoom from "./pages/mento/QueryRoom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="qr/:id" element={<QueryRoom />} />
        <Route path="mento" element={<MentoPage />} />
        <Route path="mento-cqr" element={<CreateQueryRoom />} />
        <Route path="mento-seed" element={<MentoSeedPage />} />
        <Route path="schedule" element={<SchedulePage />} />
      </Route>
      <Route path="/signin" element={<SigninPage />} />
      <Route path="*" element={<NotFoundaPage />} />
    </Routes>
  );
}

export default App;