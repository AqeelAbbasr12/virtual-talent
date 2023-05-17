import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*Pages*/
import Home from "./pages/Home/home";
import DiscoverySession from "./pages/DiscoverySession";

/*Bootstrap*/
import "bootstrap/dist/css/bootstrap.min.css";

/*Custom Css*/
import "./App.css";

/*AOS*/
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  AOS.init({ once: true });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/discovery-session"
            element={<DiscoverySession />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
