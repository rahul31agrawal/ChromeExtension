// import { Routes, Route } from "react-router";
// import Widgets from "../src/pages/Widgets";
import Home from "./pages/home/Home";

import {Router} from "react-chrome-extension-router";

// import './App.css';





function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
