import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ResearchPage from "./pages/Research/ResearchPage";
import Navbar from "./components/Navbar";
import AnimatedLogo from "./components/animations/AnimatedLogo";

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <AnimatedLogo />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/research" element={<ResearchPage />} />
      </Routes>
    </div>
  );
}
