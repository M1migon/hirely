import React, { useState } from "react";
import './Slider.css';
import { Link } from "react-router-dom";

function Topic(props) {
    return (
        <p className="smallTopic">
            {props.topic}
            <p className="smallInfo">
                {props.info}
            </p>
            <a className="smallLinkToHAHA" href="https://surl.lihttps://youtu.be/dQw4w9WgXcQ?si=6r2VXtXfAAcvwS-B/uqckzf">{props.link}</a>
        </p>
    )
}

function ButtonsOnPost(props) {
    return (
        <div className="smallSocialButton">
            <img className="smallImage" src={props.image} alt={props.text} />
            <p className="smallTextOnSocialButt">{props.text}</p>
        </div>
    );
}


function ElementForSlider(props) {
    return (
        <div className="elementForSlider">
            <div className="smallAboutUser">
                <img className="smallPhotoOfMen" src={props.img} alt="photoOfMen" />
                <div className="forTextAboutUser">
                    <Topic topic="About:" info="Jonathan Mitchel, 23 y.o" />
                    <Topic topic="Position:" info="UI/UX Designer" />
                    <Topic topic="Portfolio:" link="https://surl.li/uqckzf" />
                </div>
            </div>
            <div className="forSmallDescription">
                <p className="smallDesription">
                    • Jonathan Mitchel is a top-tier UI/UX designer who turns complex ideas into intuitive, user-centered interfaces that are functional, visually engaging, and boost product value... <Link to="" className="readMore">read more</Link>
                </p>
            </div>
            <div className="forSmallSocialButtons">
                <ButtonsOnPost image="like.png" text="263" />
                <ButtonsOnPost image="ChatCircleDotsPurple.png" text="Write" />
                <ButtonsOnPost image="send.png" text="Send" />
                <ButtonsOnPost image="share.png" text="Share" />
            </div>
        </div>
    );
}

export function Slider() {
    const elements = [
        { img: 'men.png' },
        { img: 'men2.png' },
        { img: 'men.png' },
        { img: 'men2.png' },
        { img: 'men.png' },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 3;
    const cardWidth = 380; // Ширина карточки + отступ (в px)

    const handlePrev = () => {
        setStartIndex((prev) =>
            prev - 1 < 0 ? elements.length - visibleCount : prev - 1
        );
    };

    const handleNext = () => {
        setStartIndex((prev) =>
            prev + visibleCount >= elements.length ? 0 : prev + 1
        );
    };

    const visibleCards = elements.slice(startIndex, startIndex + visibleCount);
    while (visibleCards.length < visibleCount) {
        visibleCards.push(...elements.slice(0, visibleCount - visibleCards.length));
    }

    return (
        <div className="slider">
            <div className="forArrow" onClick={handlePrev}>
                <img src="LineToLeft.png" alt="prev" />
            </div>

            <div className="sliderWindow">
                <div
                    className="sliderTrack"
                    style={{ transform: `translateX(-${startIndex * cardWidth}px)` }}
                >
                    {elements.map((item, index) => (
                        <ElementForSlider key={index} img={item.img} />
                    ))}
                </div>
            </div>

            <div className="forArrow" onClick={handleNext}>
                <img src="LineToRight.png" alt="next" />
            </div>
        </div>
    );
}
