import React from "react";
import { Header } from "../forHeader/Header";
import { Slider } from "../forSlider/Slider";
import { Post } from "../forPost/Post";
import { SignUpOrLogin } from "../forSignUpOrLogin/signUpOrLogin";
import './MainContent.css';


export function MainContent(props) {
    return (
        <div id ="mainContent">
            <div className="forSliderAndSignUp">
                <SignUpOrLogin></SignUpOrLogin>
                <Slider></Slider>
            </div>
        <div id = 'posts'>
            <Post></Post>
            <Post></Post>
        </div>
        <button className="ShowMore">Show more</button>
    </div>
    )
}