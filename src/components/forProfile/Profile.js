import React, { useState } from "react";
import './Profile.css'

function ElementOfPersonalInfo(props) {
    return (
        <p className="whatInfo">
            {props.topicOfInfo}
            <p className={props.class}>{props.info}</p>
        </p>
    )
}


function PersonalInfo(props) {
    return (
        <div className="infoOfUser">
            <div className="PersonalInfo">
                <ElementOfPersonalInfo class='thatInfo' topicOfInfo='User Name:' info='14Z&V88'></ElementOfPersonalInfo>
                <ElementOfPersonalInfo class='thatInfo' topicOfInfo='Name and Surname:' info='Jonathan Mitchel'></ElementOfPersonalInfo>
                <ElementOfPersonalInfo class='withoutColor' topicOfInfo='Age:' info='01.01.1901'></ElementOfPersonalInfo>
                <ElementOfPersonalInfo class='withoutColor' topicOfInfo='Position:' info='Senior UI/UX Designer'></ElementOfPersonalInfo>
            </div>
            <div className="PersonalInfo">
                <ElementOfPersonalInfo class='withoutColor' topicOfInfo='Phone Number:' info='+380 68 710 72 79'></ElementOfPersonalInfo>
                <ElementOfPersonalInfo class='withoutColor' topicOfInfo='E-mail:' info='johnmitch@gmail.com'></ElementOfPersonalInfo>
                <ElementOfPersonalInfo class='withoutColor' topicOfInfo='Country, City, Region:' info='Ukraine, Odessa, Odesska Oblast'></ElementOfPersonalInfo>
                <ElementOfPersonalInfo class='withoutColor' topicOfInfo='Adress:' info='Sadovaya 3'></ElementOfPersonalInfo>
            </div>
            <div className="PersonalInfo">
                <ElementOfPersonalInfo class='thatInfo' topicOfInfo='Portfolio:' info='https://surl.li/uqckzf'></ElementOfPersonalInfo>
            </div>
        </div>
    )
}

function Description(props) {
    return (
        <div className="justDescr">
            <h1 className="top">{props.top}</h1>
            <p className="decript">{props.descript}</p>
        </div>
    )
}

function Propositions(props) {
    return (
        <div>
            <h1 className="propos">{props.propos}</h1>
            <p className="textInPropos">{props.text}</p>
        </div>
    )
}

export function Profile(props) {
    return (
        <div className="wrapForProfile">
            <div className="profileInfo">
                <div className="photoOFProfileAndOther">
                    <div className="purpleOnTheTop">
                    </div>
                    <div className="forImageOfProfile">
                        <img className="imageOfProfile" src={props.imageOfProfile}></img>
                        <img className="camera" src="camera.png"></img>
                    </div>
                    <img className="noteImg" src="note.png"></img>
                </div>
                <div className="globalInfo">
                    <PersonalInfo></PersonalInfo>
                    <Description top='About' descript='I’ve had the pleasure of collaborating with David J. on several high-stakes projects, and I can confidently say he’s one of the most skilled UI/UX designers I’ve ever worked with. His ability to balance creativity with functionality is truly exceptional. David’s designs are always user-centered, visually striking, and grounded in solid research. He has a knack for simplifying complex workflows into seamless experiences, making him a key contributor to the success of our projects. For anyone searching for a top-tier UI/UX designer, I can’t recommend David enough. I’ve had the pleasure of collaborating with David J. on several high-stakes projects, and I can confidently say he’s one of the most skilled UI/UX designers I’ve ever worked with. His ability to balance creativity with functionality is truly exceptional. He has a knack for simplifying complex workflows into seamless experiences, making him a key contributor to the success of our projects. For anyone searching for a top-tier UI/UX designer, I can’t recommend David enough.'></Description>
                    <Description top='More information' descript='I’ve had the pleasure of collaborating with David J. on several high-stakes projects, and I can confidently say he’s one of the most skilled UI/UX designers I’ve ever worked with. His ability to balance creativity with functionality is truly exceptional. David’s designs are always user-centered, visually striking, and grounded in solid research. He has a knack for simplifying complex workflows into seamless experiences, making him a key contributor to the success of our projects. For anyone searching for a top-tier UI/UX designer, I can’t recommend David enough. I’ve had the pleasure of collaborating with David J. on several high-stakes projects, and I can confidently say he’s one of the most skilled UI/UX designers I’ve ever worked with. For anyone searching for a top-tier UI/UX designer, I can’t recommend David enough. Link on GitHub: https://surl.lihttps://youtu.be/dQw4w9WgXcQ?si=6r2VXtXfAAcvwS-B/uqckzf'></Description>
                </div>
            </div>
            <div>
                <div className="premium">
                    <img className="star" src="star.png"></img>
                    <h1 className="forFree">Try premium for free!</h1>
                    <p className="acces">Access to exclusive tools</p>
                    <Propositions propos='Priority support!' text='Get fast, dedicated help from our expert team.'></Propositions>
                    <Propositions propos=' Exclusive early access to new features!' text='Be the first to try innovations before public release.'></Propositions>
                    <Propositions propos='Access to premium content!' text='Unlock special materials not available in the free version.'></Propositions>
                    <Propositions propos='Extended limits!' text='Enjoy more freedom with higher usage caps and fewer restrictions.'></Propositions>
                    <Propositions propos='Premium status badge!' text='Stand out with a unique icon or profile upgrade.'></Propositions>
                    <Propositions propos='Ad-free experience!' text='Enjoy the platform without any interruptions or distractions.'></Propositions>
                    <Propositions propos='Exclusive community access!' text='Join private forums and chat with other premium users.'></Propositions>
                    <Propositions propos='More perks!' text='Join private forums and chat with other premium users.'></Propositions>
                </div>
                <div className="payment">
                    <h1 className="paymentDeatils">Payment Details</h1>
                    <p className="cardNum">Card Number:</p>
                    <input type="text" className="cardNumberInput" placeholder="1444 **** **** **** 8888"></input>
                    <img className="howToPay" src="partners.png"></img>
                </div>
            </div>
        </div>
    )
}