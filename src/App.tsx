import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";
import MentoPage from "./pages/mento/MentoPage";
import MentoSeedPage from "./pages/mento/MentoSeed";
import NotFoundaPage from "./pages/NotFoundPage";
import SchedulePage from "./pages/SchedulePage";
import SigninPage from "./pages/SigninPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="mento" element={<MentoPage />} />
        <Route path="mento-seed" element={<MentoSeedPage />} />
        <Route path="schedule" element={<SchedulePage />} />
      </Route>
      <Route path="/signin" element={<SigninPage />} />
      <Route path="*" element={<NotFoundaPage />} />
    </Routes>
  );
}

export default App;
