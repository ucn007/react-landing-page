import "./App.scss";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Pricing from "./Pages/Pricing/Pricing";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Footer from "./Components/Footer";
import { useState } from "react";
import cx from "classnames";

function App() {
  const [state, setState] = useState(false);
  console.log(state);
  const changeState = () => {
    setState(!state);
  };
  return (
    <div className={cx("app", state === true ? "light-mode" : "dark-mode")}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
      <div
        role="button"
        className={cx(
          "mode-change",
          state === true ? "light-mode" : "dark-mode"
        )}
        onClick={changeState}
      ></div>
      <Footer />
    </div>
  );
}

export default App;
