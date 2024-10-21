import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MoreDetails from "./routes/MoreDetails";
import HomePage from "./routes/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="more-details" element={<MoreDetails />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
