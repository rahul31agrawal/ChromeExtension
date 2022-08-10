import React from "react";
import "./Widget.css";

import Todo from "../Component/Todo/Todo";
import Greeting from "../Component/Greeting/Greeting";
import Time from "../Component/Time/Time";
import Weather from "../Component/Weather/Weather";
import Quotes from "../Component/Quotes/Quotes";

function Widgets() {
  return (
    <div className="wallpaper">
      <div className="widgetContainer">
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
