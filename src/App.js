import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutTF from './about-tf/about-tf';
import HomePage from './homepage/Homepage';
import Merch from './merch/Merch';
import EPC from './epc/Epc';
import Injection from './injection/Injection';
import Videografi from './videografi/Videografi';
import Footer from './component/Footer';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        
          <Routes>
            <Route path='/' exact Component={HomePage}/>
            <Route path='/aboutTF' Component={AboutTF}/>
            <Route path='/merch' Component={Merch}/>
            <Route path='/epc' Component={EPC}/>
            <Route path='/injection' Component={Injection}/>
            <Route path='/videografi' Component={Videografi}/>
          </Routes>
        <Footer/>
      </Router>

    
          
 
    </div>
  );
}

export default App;
