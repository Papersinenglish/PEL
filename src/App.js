import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from "react-router";
import Editorial from './components/main/Editorial'
import Geninfo from './components/main/Geninfo';
import Publication from './components/publications/publication'
import Main from './components/main/Main'; 
import Volume24no34 from './components/publications/volume24no34';
import Volume24no12 from './components/publications/volume24no12';
import Volume25no12 from './components/publications/volume25no12';
import Volume26no12 from './components/publications/volume26no12';
import Volume26no34 from './components/publications/volume26no34';

import ScrollToHashElement from "./components/main/ScrolltoHashElement";

function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  

  return (
    <>
    <ScrollToHashElement/>
   <Header/> 
     <Routes> 
         <Route path="/" element={<Main/>} />
        <Route path="/editorialboard" element={<Editorial/>} />
        <Route path="/generalinformation" element={<Geninfo/>} />
        <Route path="/publications" element={<Publication/>} />
        <Route path="/volume24-no-1&2" element={<Volume24no12/>} />
        <Route path="/volume24-no-3&4" element={<Volume24no34/>} />
        <Route path="/volume25-no-1&2" element={<Volume25no12/>} />
        <Route path="/volume26-no-1&2" element={<Volume26no12/>} />
        <Route path="/volume26-no-3&4" element={<Volume26no34/>} />
      </Routes>     
<Footer/> 
    </>
  )
}

export default App;
