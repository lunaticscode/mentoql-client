import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";
import MentoPage from "./pages/mento/MentoPage";
import SigninPage from "./pages/SigninPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signin" element={<SigninPage />} />
        <Route path="mento" element={<MentoPage />} />
      </Route>
    </Routes>
  );
}

export default App;