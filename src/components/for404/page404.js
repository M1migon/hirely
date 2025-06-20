import React from "react";
import "./page404.css";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="forBackgroundImageRegister">
        <div className="Container404">
            <img id="title" src="404Title.png" alt="404 Not Found"></img>
            <div id ="text404">
                <p id = 'BigP'>PAGE NOT FOUND</p>
                <p id = 'SmallP'>but we can still help you find a job</p>
            </div>
            <Link to='/' className="Button404">{"Let’s find a job! :)"}</Link>
        </div>
    </div>
  );
}