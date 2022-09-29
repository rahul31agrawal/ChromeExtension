import React, { useEffect, useState } from "react";
import { useUserName } from "../../context/userContex";
// import { useNavigate } from 'react-router-dom';
import Widgets from "../../pages/Widgets";
import { Link } from "react-chrome-extension-router";
import "../Time/Time.css";
import "./Onboarduser.css";

function OnboardUser() {
  const [greetingMessage, setGreetingMessage] = useState("");

  

  const { userName, setUserName,userFocus, setUserFocus } = useUserName();

  const { setTodos } = useUserName([]);
 

  const submitUserName = (e) => {
    e.preventDefault();
    console.log(userName);
    
    setTodos([""]);
  };

  

  useEffect(() => {
    const item = localStorage.getItem("userName");
    const loadedItem = JSON.parse(item);

    

    if (loadedItem  ) {
      setUserName(loadedItem);
      
    }
  }, [setUserName]);

  useEffect(() => {
    const json = JSON.stringify(userName);
    localStorage.setItem("userName", json);

    

  }, [userName]);

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
  }, []);

  return (
    <div className="onboard-card greeting">
      <span>{greetingMessage}</span>
      <br />
      {
        <div>
          <form className="greeting-form">
            <input
              placeholder="Type name here"
              type="text"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            <h3>What is your main focus for today ?</h3>

            <input
            placeholder="Enter your focus here"
            type="text"
              value={userFocus}
              onChange={(event) => setUserFocus(event.target.value)}
            />
          </form>
          <button className="submitBtn" onClick={submitUserName}>
            <Link className="link" component={Widgets}>Submit</Link>
          </button>
        </div>
      }
    </div>
  );
}

export default OnboardUser;


