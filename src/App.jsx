import { Index } from "./pages";
import { Navigator } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { Home } from "./pages/Home";
import { useSelector } from "react-redux";

export const App = () => {
  const user = useSelector((state) => state.user);
  const logged = user.logged;

  return (
    <main className="container">
      <Navigator logged={logged} />
      <Routes>
        <Route path="/" element={<Index logged={logged} />} />
        <Route path="/login" element={<Login logged={logged} />} />
        <Route
          path="/registration"
          element={<Registration logged={logged} />}
        />
        <Route path="/home" element={<Home logged={logged} user={user} />} />
      </Routes>
    </main>
  );
};
