import React from "react";
import { Header } from "../forHeader/Header";
import { Slider } from "../forSlider/Slider";
import { Post } from "../forPost/Post";
import { SignUpOrLogin } from "../forSignUpOrLogin/signUpOrLogin";
import './MainContent.css';

function NewsRow(props) {
    return (
        <div className="newsRow">
            <p className="newsTitle">{props.title}</p>
            <p className="newsInfo">{props.info}</p>
        </div>
    );
}

export function MainContentOut(props) {
    return (
    <div id = 'Main'>
        <div id ="mainContent">
            <div className="leftSide">
                <SignUpOrLogin></SignUpOrLogin>
            </div>
            <div id = 'Center'>
                <div id = 'SliderAndPosts'>
                    <Slider></Slider>
                    <div id = 'postsAndNews'>
                        <div id = 'posts'>
                            <Post></Post>
                            <Post></Post>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div id = "buttonNline">
                        <button className="ShowMore">Show more</button>
                        <hr id = 'line'></hr>
            </div>
    </div>
    )
}

function MiniProfile(props) {
    return (
        <div className="miniProfile">
            <div id = 'miniProfileContainer'>
                <img className="miniPfp" src={props.image} alt="Profile"></img>
                <div id ="miniProfileInfo">
                    <p className="username">{props.username}</p>
                    <p className="miniRow">{props.legalname}</p>
                    <p className="miniRow">{props.positions}</p>
                </div>
                <hr id = 'miniProfileLine'></hr>
                <div  id = 'miniRegions'>
                    <div id = 'miniRegion'>
                        <p id = 'purpRow'>Region</p>
                        <p className = 'miniRow'>{props.geo}</p>
                    </div>
                    <div id = 'miniRegion'>
                        <p id = 'purpRow'>Skills</p>
                        <p className = 'miniRow'>{props.skills}</p>
                    </div>
                </div>
                
                <button className="miniProfileButton">Change Profile</button>
            </div>
        </div>
    );
}

function YourInfo(props) {
    return (
        <div id = "cardItself">
            <div id ="YourInfoRow">
                <p id = "miniRow">Your publications</p>
                <p id = "numOf">{props.pubCount}</p>
            </div> 
            <div id ="YourInfoRow">
                <p id = "miniRow">Members who liked you</p>
                <p id = "numOf">{props.LikeCount}</p>
            </div> 
            <div id ="YourInfoRow">
                <p id = "miniRow">Members who viewed your profile</p>
                <p id = "numOf">{props.ViewCount}</p>
            </div> 
        </div>
    )
}

function GroupsInfo(props) {
    return (
        <div id = "cardItself">
            <div id ="YourInfoRow">
                <p id = "miniRow">Groups</p>
                <p id = "numOf">{props.GroupCount}</p>
            </div> 
            <div id ="YourInfoRow">
                <p id = "miniRow">Saved posts</p>
                <p id = "numOf">{props.PostsCount}</p>
            </div> 
            <div id ="YourInfoRow">
                <p id = "miniRow">Events</p>
                <p id = "numOf">{props.EventsCount}</p>
            </div> 
        </div>
    )
}

function TryPremium(props) {
    return (
        <div id = "cardItself" className = "cursor">
            <img id = "premiumImage" src="TryPrem.png" alt="Premium"></img>
        </div>
    )
}

export function MainContentIn(props) {
    return (
    <div id = 'Main'>
        <div id ="mainContent">
            <div className="leftSide">
                <MiniProfile 
                    image = "men.png" 
                    username = "User Name" legalname = "Name \ Surname" 
                    positions = "Intern · Junior · Middle · Senior" 
                    geo = "Odessa, Ukraine" 
                    skills = "Skills · Skills · Skills">
                </MiniProfile>
                <YourInfo 
                    pubCount = "17" 
                    LikeCount = "41" 
                    ViewCount = "104">
                </YourInfo>
                <TryPremium/>
                <GroupsInfo
                    GroupCount = "17"
                    PostsCount = "23"
                    EventsCount = "0">
                </GroupsInfo>

            </div>
            <div id = 'Center'>
                <div id = 'SliderAndPosts'>
                    <Slider></Slider>
                    <div id = 'postsAndNews'>
                        <div id = 'posts'>
                            <Post></Post>
                            <Post></Post>
                        </div>
                        <div id = 'News'>
                            <div id = 'NewsContainer'>
                                <p id = 'HirelyNews'>Hirely News</p>
                                <NewsRow title = "• IBM’s Ambitious Quantum Leap" info = "1 minute ago • 9876 views"></NewsRow>
                                <NewsRow title = "• IBM’s Ambitious Quantum Leap" info = "1 minute ago • 9876 views"></NewsRow>
                                <NewsRow title = "• IBM’s Ambitious Quantum Leap" info = "1 minute ago • 9876 views"></NewsRow>
                                <NewsRow title = "• IBM’s Ambitious Quantum Leap" info = "1 minute ago • 9876 views"></NewsRow>
                                <NewsRow title = "• IBM’s Ambitious Quantum Leap" info = "1 minute ago • 9876 views"></NewsRow>
                                <NewsRow title = "• IBM’s Ambitious Quantum Leap" info = "1 minute ago • 9876 views"></NewsRow>
                                <NewsRow title = "• IBM’s Ambitious Quantum Leap" info = "1 minute ago • 9876 views"></NewsRow>
                                <NewsRow title = "• IBM’s Ambitious Quantum Leap" info = "1 minute ago • 9876 views"></NewsRow>
                                <NewsRow title = "• IBM’s Ambitious Quantum Leap" info = "1 minute ago • 9876 views"></NewsRow>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
            <div id = "buttonNline">
                <button className="ShowMore">Show more</button>
                <hr id = 'line'></hr>
            </div>
    </div>
    )
}