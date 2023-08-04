import "./Footer.css"
import Logo from "./asset/Logo_EPW-06-01.png";
import React from 'react';
import {FaLinkedin, FaFacebookF, FaTiktok, FaLine, FaInstagram} from "react-icons/fa"
import { NavLink } from "react-router-dom";

function Footer () {
    return (
        <footer className="foot">
            <div className="footer-container">
                <div className="footer-brand">
                    <img src={Logo} className="footer-logo" alt=""/>
                    <h1>EPW 2024</h1>
                </div>
                <div className="footer-main">
                    <div>
                        <h1>Event</h1>
                        <ul>
                            <li><NavLink className="hover" to="/epc" >
                                EPC
                                </NavLink>
                            </li>
                            <li><NavLink className="hover" to="/injection" >
                            Injection
                        </NavLink></li>
                            <li><NavLink className="hover" to="/videografi">
                            Videografi
                        </NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-sosmed">
                        <h1>You can find us at</h1>
                        <ul className="sosmed">
                            <li><a><FaInstagram size={25}/></a></li>
                            <li><a><FaFacebookF size={25}/></a></li>
                            <li><a><FaTiktok size={25}/></a></li>
                            <li><a><FaLinkedin size={25}/></a></li>
                            <li><a><FaLine size={25}/></a></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            <div className="footer-sub">
                <div>
                  <p> &copy; Copyright by EPW 2024</p>  
                </div>  
            </div>

        </footer>
    )
}

export default Footer ;