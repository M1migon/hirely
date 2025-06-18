import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

export function Footer() {
    return <div className="footer">
        <div className="footerContainer">

            <div id = "footerColumn">
                <img id="footerLogo" src="HirelyF.svg" alt="logo"></img>
                <p id = "footerText">Trusted recruitment hub since 2025. Hirely helps professionals find roles at top global firms.</p>
                <div id = "rowContainer">
                    <img className="footerIcon" src="LocationF.svg" alt="facebook"></img>
                    <p>Sadovaya 3, Odessa</p>
                </div>
                <div id = "rowContainer">
                    <img className="footerIcon" src="PhoneF.svg" alt="facebook"></img>
                    <p>+380 68 710 72 79</p>
                </div>
                <p id = "thinRow">www.hirely.com</p>
            </div>

            <div id = "footerColumn">
                <p id = "boldRow">Information</p>
                <p id = "row">Home</p>
                <p id = "row">Network</p>
                <p id = "row">Vacancies</p>
                <p id = "row">Messages</p>
                <p id = "row">Notifications</p>
            </div>

            <div id = "footerColumn">
                <p id = "boldRow">Contact us</p>
                <div id = "rowContainer">
                    <img className="footerIcon" src="FacebookF.svg" alt="facebook"></img>
                    <p id = "row">Facebook</p>
                </div>
                <div id = "rowContainer">
                    <img className="footerIcon" src="InstagramF.svg" alt="facebook"></img>
                    <p id = "row">Instagram</p>
                </div>
                <div id = "rowContainer">
                    <img className="footerIcon" src="TwitterF.svg" alt="facebook"></img>
                    <p id = "row">Twitter</p>
                </div>
            </div>

            <div id = "footerColumn">
                <p id = "boldRow">Accessibility</p>
                <p id = "row">Terms & Conditions</p>
                <p id = "row">Privacy Policy</p>
            </div>

            <div id = "footerColumn">
                <div id = "verticalRowContainer">
                    <p id = "boldRow">Stay Updated</p>
                    <div>
                        <input id = "emailInput" type="email" placeholder="Enter your E-mail"></input>
                        <button id = "send">
                            <img id = "sendIcon" src="SendF.svg" alt="send"></img>
                        </button>
                    </div>
                </div>
                <p id = "lastThinRow">©2025 Home. All rights reserved.</p>
            </div>

        </div>
    </div>
}