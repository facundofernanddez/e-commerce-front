import { Index } from "./pages/Index";
import { Navigator } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";

export const App = () => {
  return (
    <main className="container">
      <Navigator />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </main>
  );
};
