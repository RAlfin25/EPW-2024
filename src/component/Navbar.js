import React,{useState} from 'react';
import {Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import Logo from './asset/Frame.png'
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";

function Navbar () {

const [isActive, setIsActive] = useState(false);
  

    

    return  (
      <header>


        <div className='submenu'>
        {isActive && (
                <ul >
                    <li >
                       <NavLink to="/epc"
                            style={({ isActive, isPending }) => {
                                return {
                                  fontWeight: isActive ? "bold" : "",
                                  color: isPending ? "red" : "black",
                                  textDecoration: "none", 
                                };
                              }} >
                            EPC
                        </NavLink>
                    </li>
                    <li>
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
                    <li>
                        <NavLink to="/videografi"
                       style={({ isActive, isPending }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          textDecoration: "none", 
                        };
                      }} >
                        Videografi
                        </NavLink>
                    </li>
          </ul>)}
        </div>
          
        <nav className='nav_menu'>
			  <div className='nav-logo'>
          <img src={Logo} className='Logo' alt=""/>
          <p>EPW 2024</p>				
			  </div>
	
        <div>
          <div>
            <ul className='menu'>
		        <li>
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
			      <li>
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
			      <li onClick={(e) => setIsActive (!isActive)}>
                Event  <FiChevronDown className="sub__menus__arrows"/>            
            </li>
            <li>
            <NavLink to="/merch"
                style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "" : "#114E90",
                      textDecoration: "none", 
                    };
                  }} >
                Merch
            </NavLink>
            </li>
			     <li>Login</li>
		      </ul>
          </div>
		     

		    </div>
        
       
        </nav>
      
        

        
      </header>

      
      
    )
}

export default Navbar ;