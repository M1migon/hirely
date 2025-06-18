import React, { useState } from "react";
import './Post.css'
import { Link } from "react-router-dom";

function Topic(props) {
    return (
        <p className="topic">
            {props.topic}
            <p className="info">
                {props.info}
            </p>
            <a className="linkToHAHA" href="https://surl.lihttps://youtu.be/dQw4w9WgXcQ?si=6r2VXtXfAAcvwS-B/uqckzf">{props.link}</a>
        </p>
    )
}

function ButtonsOnPost(props) {

    const [isHovered, setHover] = useState(false)

    const toogleHover = () => {
        setHover(!isHovered)
    }

    const initial = parseInt(props.text) || 0;
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(initial);

    const handleClick = () => {
        if (liked) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
        setLiked(!liked);
    };


    if (props.text === '263') {
        return (
            <div className="socialButton" onClick={handleClick}>
                <img
                    className="imageOfSocialButtons"
                    src={liked ? "likePainted.png" : "like.png"}
                    alt="like"
                />
                <p className="textOnSocialButtAnother">{count}</p>
            </div>
        );
    }
    else return (
        <div className="socialButton">
            <img className="imageOfSocialButtons" src={isHovered ? props.imageHover : props.image} alt={props.image} onMouseEnter={toogleHover} onMouseLeave={toogleHover}></img>
            <p className="textOnSocialButt">{props.text}</p>
        </div>
    )
}

export function Post(props) {
    return (
        <div className="wrapperForPost">
            <div className="aboutUser">
                <img src="men.png" alt="photoOfMen"></img>
                <div className="forTextAboutUser">
                    <Topic topic='About:' info='Jonathan Mitchel, 23 y.o'></Topic>
                    <Topic topic='Position:' info='UI/UX Designer'></Topic>
                    <Topic topic='Portfolio:' link='https://surl.lihttps://youtu.be/dQw4w9WgXcQ?si=6r2VXtXfAAcvwS-B/uqckzf'></Topic>
                </div>
            </div>
            <div className="forDescription">
                <p className="desription">
                    I’ve had the pleasure of collaborating with David J. on several high-stakes projects, and I can confidently say he’s one of the most skilled UI/UX designers I’ve ever worked with. His ability to balance creativity with functionality is truly exceptional.
                    David’s designs are always user-centered, visually striking, and grounded in solid research. He has a knack for simplifying complex workflows into seamless experiences, making him a key contributor to the success of our projects.
                    For anyone searching for a top-tier UI/UX designer, I can’t recommend David enough.
                </p>
            </div>
            <img id = 'contentImage'src="xz.png" alt="chtoto"></img>
            <div className="forSocialButtons">
                <ButtonsOnPost text='263'></ButtonsOnPost>
                <ButtonsOnPost imageHover='ChatCircleDotsPainted.png' image='ChatCircleDotsPurple.png' text='Write'></ButtonsOnPost>
                <ButtonsOnPost imageHover='sendPainted.png' image='send.png' text='Send'></ButtonsOnPost>
                <ButtonsOnPost imageHover='sharePainted.png' image='share.png' text='Share'></ButtonsOnPost>
            </div>
        </div>
    )
}

