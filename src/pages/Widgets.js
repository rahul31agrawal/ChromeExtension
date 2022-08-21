import React from "react";
import "./Widget.css";
import {Link} from "react-chrome-extension-router";
import Todo from "../Component/Todo/Todo";
import Greeting from "../Component/Greeting/Greeting";
import Time from "../Component/Time/Time";
import Weather from "../Component/Weather/Weather";
import Quotes from "../Component/Quotes/Quotes";
import Home from "../pages/home/Home";
import FocusComp from "../Component/focus/FocusComp";
function Widgets() {
  return (
    <div className="wallpaper">
      <div className="backBtnDiv">
        <button className="backBtn"><Link className="link" component={Home}>Back to Home</Link></button>
      </div>
      <div className="widgetContainer">
        <div className="item1">
          <FocusComp/>
        </div>

        <div className="item2">
          <Time />
        </div>

        <div className="item3">
          <Greeting />
        </div>

        <div className="item4">
          <Weather />
        </div>

        <div className="item5">
          <Todo />
        </div>

        <div className="item6">
          <Quotes />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
