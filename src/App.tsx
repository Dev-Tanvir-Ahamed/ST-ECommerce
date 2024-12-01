import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
