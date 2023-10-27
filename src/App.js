import "./App.css";
import Template1 from "./pages/Template1";
import { fstore } from "./firebase-config";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Page404 from "./pages/Page404";
import UserPortfolioPage from "./pages/UserPortfolioPage";

function App() {
  return (
    <div class="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/p/:id" element={<UserPortfolioPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
