import React from "react";
import { Route, Routes} from "react-router-dom";
import Router from "../hooks/Router"
import { Home } from "../pages/home/home";
import { Portfolio } from "../pages/portfolio/portfolio";
import { ContactUs } from "../pages/contact/contact";
import { About } from "../pages/about/about";
import { Icons } from "../components/icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = Router(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Icons />
    </div>
  );
}

export default AppRoutes;
