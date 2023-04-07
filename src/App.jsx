import { Index } from "./pages/Index";
import { Navigator } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export const App = () => {
  return (
    <main className="container">
      <Navigator />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
};
