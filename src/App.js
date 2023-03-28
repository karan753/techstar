

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import Headers from "./components/Headers";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";


import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/services.scss"
import "./styles/mediaquery.scss"



function App() {
  return (
    
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/contact" element= { <Contact /> } />
        <Route path="/services" element= { <Services /> } />
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
