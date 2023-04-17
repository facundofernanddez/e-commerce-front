import { Index } from "./pages";
import { Navigator } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { useSelector } from "react-redux";

export const App = () => {
  const user = useSelector((state) => state.user);
  const logged = user.logged;
  const cart = useSelector((state) => state.cart);

  return (
    <main className="container">
      <Navigator logged={logged} user={user} cart={cart} />
      <Routes>
        <Route
          path="/"
          element={<Index logged={logged} user={user} cart={cart} />}
        />
        <Route path="/login" element={<Login logged={logged} />} />
        <Route
          path="/registration"
          element={<Registration logged={logged} />}
        />
      </Routes>
    </main>
  );
};
