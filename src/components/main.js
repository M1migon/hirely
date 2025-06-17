import React from "react";
import { Header } from "./forHeader/Header";
import { Slider } from "./forSlider/Slider";
import { Post } from "./forPost/Post";
import { SignUpOrLogin } from "./forSignUpOrLogin/signUpOrLogin";


export function MainPage(props) {
    return (
        <div>

            <Header></Header>
            <div className="forSliderAndSignUp">
                <SignUpOrLogin></SignUpOrLogin>
                <Slider></Slider>
            </div>
            <Post></Post>
            <Post></Post>
        </div>
    )
}