import React from 'react';
import './App.css';
import ComingSoon from './component/comingSoon';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutTF from './about-tf/about-tf';
import HomePage from './homepage/Homepage';
import Epc from './epc/Epc';
import Injection from './injection/Injection';
import Fotografi from './fotografi/Fotografi';
import Footer from './component/Footer';
import P from './component/P';
import NotFound from './component/Notfound';
import Foton from './Laboratory/Foton'
import Energi from './Laboratory/energi'
import Instrumen from './Laboratory/Ico'
import Bahan from './Laboratory/Bahan'
import Vibrastik from './Laboratory/Vibs'
import ECS from './Laboratory/ECS'
import PKRK from './Laboratory/Pkrk'
import RegistInj from './registInj/RegistInj'
import Login from './login/login';
import Signup from './login/signup'



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={HomePage}/>
          <Route path='/aboutTF' Component={AboutTF}/>
              <Route path='/Foton' Component={Foton}/>
              <Route path='/Energi' Component={Energi}/>
              <Route path='/Instrumen' Component={Instrumen}/>
              <Route path='/Bahan' Component={Bahan}/>
              <Route path='/Vibrastik' Component={Vibrastik}/>
              <Route path='/ECS' Component={ECS}/>
              <Route path='/PKRK' Component={PKRK}/>
          <Route path='/epc' Component={Epc}/>
          <Route path='/injection' Component={Injection}/>
              <Route path='injection/regist-injection' Component={RegistInj}/>
          <Route path='/fotografi' Component={Fotografi}/>

              <Route path='/p' Component={P}/>

          <Route path='/login' Component={Login}/>
          <Route path='/sign-up' Component={Signup}/>
          <Route path='/Page-Not-Found' Component={NotFound}/>
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
