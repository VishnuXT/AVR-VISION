import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Mainlayout from "./Layout/Mainlayout";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import UIUXdesign from "./Pages/Services/Screens/UIUXdesign";
import WebDevelopment from "./Pages/Services/Screens/Webdevelopment";
import AppDevelopment from "./Pages/Services/Screens/Appdevelopment";
import GraphicsDesign from "./Pages/Services/Screens/Graphicsdesign";
import CharacterDesign from "./Pages/Services/Screens/Characterdesign";
import GameDevelopment from "./Pages/Services/Screens/Gamedevelopment";
import DModeling from "./Pages/Services/Screens/3DModeling";
import AboutUs from "./Pages/AboutUs";
import Contactus from "./Pages/ContactUs";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />}/>
            <Route path="uiux" element={<UIUXdesign />} /> 
            <Route path="webdevelopment" element={<WebDevelopment/>} /> 
            <Route path="appdevelopment" element={<AppDevelopment/>} />
            <Route path="graphicsdesign" element={<GraphicsDesign/>} />
            <Route path="characterdesign" element={<CharacterDesign/>} />
            <Route path="gamedevelopment" element={<GameDevelopment/>} />
            <Route path="3dmodeling" element={<DModeling/>} />
            <Route path="about" element={<AboutUs/>} />
            <Route path="contact" element={<Contactus/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
