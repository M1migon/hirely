import React, { useState } from "react";
import './Register.css'
import { Link } from "react-router-dom";



function InputString(props) {

    const [isHidden, setHidden] = useState(false)

    const hide = () => {
        setHidden(!isHidden)
    }

    if (props.type != 'password') {
        return (
            <div className="inputString">
                <img className="imgForInput" src={props.image + '.png'} alt="email"></img>
                <input type={props.type} className="inputForRegisterForm" placeholder={props.placeholder}></input>
            </div>
        )
    }
    else {
        return (
            <div className="inputString">
                <img className="imgForInput" src={props.image + '.png'} alt="email"></img>
                <input type={props.type} className="inputForRegisterForm" placeholder={props.placeholder}></input>
                <img className="eye" src={isHidden ? 'Invisible.png' : 'eye.png'} onClick={hide}></img>
            </div>
        )
    }
}


function ContWith(props) {
    return (
        <div className="contWith">
            <img className="imgForCont" src={props.image + '.png'}></img>
            <p className="contWithText">{props.text}</p>
        </div>
    )
}

export function GoTo(props) {
    return (
        <Link to={props.path} className="goTo">
            <p className="goWhere">{props.goWhere}</p>
        </Link>
    )
}


export function Register() {
    return (
        <div className="forBackgroundImageRegister">
            <div className="divForRegisterForm">
                <h1 className="yourProffes">Start With <img src="HIRELY.png"></img></h1>
                <h2 className="startWithUs">your professional future</h2>
                <InputString image='EnvelopeSimple' type='email' placeholder='Email or phone number'></InputString>
                <InputString image='LockKey' type='password' placeholder='Password'></InputString>
                <InputString image='LockKey' type='password' placeholder='Confirm password'></InputString>
                <button className="signUp" type="submit">Sign Up</button>
                <p className="description">By Signing Up, you agree to our <p className='colored'> Terms of Service</p> and <p className='colored'> Privacy Policy</p></p>
                <img src="or.png"></img>
                <ContWith image='google' text='Continue with Google'></ContWith>
                <ContWith image='Facebook' text='Continue with Facebook'></ContWith>
                <GoTo path='/login' goWhere='Login'></GoTo>
            </div>
        </div>
    )
}