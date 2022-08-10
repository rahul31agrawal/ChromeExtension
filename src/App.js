import { Routes, Route } from "react-router";
import Widgets from "../src/pages/Widgets";
import Home from "./pages/home/Home";


// import './App.css';


// import Greeting from './Component/Greeting/Greeting';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/widgets" element={<Widgets />} />
        
      </Routes>
    </div>
  );
}

export default App;
