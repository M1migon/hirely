import React from "react";
import './signUpOrLogin.css'
import { Link } from "react-router-dom";

export function ButtonToSomeWhere(props) {
    return (
        <Link to={props.to} className='linkToSome' id={props.isMargin}>{props.title}</Link>
    )
}

export function SignUpOrLogin(props) {
    return (
        <div className="wrap">
            <p className="getToWork">Get to work with</p>
            <img className="miniLogo" src="HIRELY.png" alt="logo"></img>
            <ButtonToSomeWhere title='Login' isMargin='addSomeMargin'></ButtonToSomeWhere>
            <img className="or" src="or2.png"></img>
             <ButtonToSomeWhere title='Sign Up'></ButtonToSomeWhere>
        </div>
    )
}