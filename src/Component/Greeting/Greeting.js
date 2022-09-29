import React, { useEffect, useState } from "react";
import "../Time/Time.css";
import "./Greeting.css";
import {useUserName} from "../../context/userContex";

function Greeting() {
  const [greetingMessage, setGreetingMessage] = useState('');
  
  

  const {userName, setUserName} = useUserName();

  

  useEffect(() => {
    const item = localStorage.getItem("userName");
    const loadedItem = JSON.parse(item);
    if (loadedItem) {
      setUserName(loadedItem);
    }
  }, [setUserName]);

  useEffect(() => {
    const json = JSON.stringify(userName);
    localStorage.setItem("userName", json);
  }, [userName])


  useEffect(() => {
    let d = new Date();
    let h = d.getHours();

    if (h > 4 && h < 12) {
      setGreetingMessage("Good Morning");
    } else if (h > 12 && h < 17) {
      setGreetingMessage("Good Afternoon");
    } else {
      setGreetingMessage("Good Evening");
    }
  }, [])

  return (
    <div className="time-card greeting">
      <span>{greetingMessage}</span>
      <br />

      <h3>{userName}</h3>

      
    </div>
  );
}

export default Greeting;
