import React,{useState} from 'react';
import {Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import Logo from './asset/Frame.png'
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import Cross from './asset/cross.svg';

function Navbar () {

const [isActive, setIsActive] = useState(false);
const [isOpen, setIsOpen] = useState(false);

    

    return  (
      <header>


        <div className='nav_menu'>
			  
        <div className='nav-logo'>
          <img src={Logo} className='Logo' alt=""/>
          <p>EPW 2024</p>				
			  </div>
        
        


        <div>
          <div className="open-nav-menu" onClick={(e) => setIsOpen (!isOpen)}>
              <span></span>
          </div>
          <div className="menu-overlay">
          </div>
          <ul className='menu main'>
            
		        <li className='menu-menu'>
            <NavLink to="/"
                 style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "" : "#114E90",
                      textDecoration: "none", 
                    };
                  }} >
                Homepage
            </NavLink>
            </li>
			      <li className='menu-menu'>
            <NavLink to="/aboutTF"
                style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "" : "#114E90",
                      textDecoration: "none", 
                    };
                  }} >
                About TF
            </NavLink>
            </li>
			      <li className='menu-menu' onClick={(e) => setIsActive (!isActive)}>
                Event  
                <FiChevronDown className="sub__menus__arrows"/>
                {isActive && (
                <ul className='submenu'>
                    <li className='menu-submenu' >
                       <NavLink to="/epc"
                            style={({ isActive, isPending }) => {
                                return {
                                  fontWeight: isActive ? "bold" : "",
                                  color: isPending ? "red" : "black",
                                  textDecoration: "none", 
                                };
                              }} >
                            <a>EPC</a>
                        </NavLink>
                    </li >
                    <li className='menu-submenu'>
                        <NavLink to="/injection"
                        style={({ isActive, isPending }) => {
                            return {
                              fontWeight: isActive ? "bold" : "",
                              color: isPending ? "red" : "black",
                              textDecoration: "none", 
                            };
                          }} >
                        Injection
                        </NavLink>
                    </li>
                    <li className='menu-submenu'>
                        <NavLink to="/fotografi"
                       style={({ isActive, isPending }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          textDecoration: "none", 
                        };
                      }} >
                        Fotografi
                        </NavLink>
                    </li>
          </ul>)}            
            </li>
			     {/*<li className='menu-login'>Login</li>*/}
		      
          </ul>
          {isOpen && (
          
            
          <ul className='menu main2'>
            <div className="open-nav-menu-2" onClick={(e) => setIsOpen (!isOpen)}>
              <span className='cross1'></span>
              <span className='cross2'></span>
          </div>
		        <li className='menu-menu'>
            <NavLink to="/"
                 style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "" : "#114E90",
                      textDecoration: "none", 
                    };
                  }} >
                Homepage
            </NavLink>
            </li>
			      <li className='menu-menu'>
            <NavLink to="/aboutTF"
                style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "" : "#114E90",
                      textDecoration: "none", 
                    };
                  }} >
                About TF
            </NavLink>
            </li>
			      <li className='menu-menu' onClick={(e) => setIsActive (!isActive)}>
                Event  
                <FiChevronDown className="sub__menus__arrows"/>
                {isActive && (
                <ul className='submenu'>
                    <li className='menu-submenu' >
                       <NavLink to="/epc"
                            style={({ isActive, isPending }) => {
                                return {
                                  fontWeight: isActive ? "bold" : "",
                                  color: isPending ? "red" : "black",
                                  textDecoration: "none", 
                                };
                              }} >
                            <a>EPC</a>
                        </NavLink>
                    </li >
                    <li className='menu-submenu'>
                        <NavLink to="/injection"
                        style={({ isActive, isPending }) => {
                            return {
                              fontWeight: isActive ? "bold" : "",
                              color: isPending ? "red" : "black",
                              textDecoration: "none", 
                            };
                          }} >
                        Injection
                        </NavLink>
                    </li>
                    <li className='menu-submenu'>
                        <NavLink to="/fotografi"
                       style={({ isActive, isPending }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          textDecoration: "none", 
                        };
                      }} >
                        Fotografi
                        </NavLink>
                    </li>
          </ul>)}            
            </li>
			    {/*<li className='menu-login'>Login</li>*/} 
		      
          </ul>
          
         
          )}
        </div>
        <label class="nav__btn" for="menu-cb"></label>

        
       
        </div>
        
      </header>

      
      
    )
}

export default Navbar ;