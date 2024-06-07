import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Mainlayout from "./Layout/Mainlayout";
import Home from "./Pages/Home";
import Services from "./Pages/Services";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
