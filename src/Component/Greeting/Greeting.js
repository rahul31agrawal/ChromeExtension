import React, { useEffect, useState } from "react";
import "../Time/Time.css";
import "./Greeting.css";
import {useUserName} from "../../context/userContex";

function Greeting() {
  const [greetingMessage, setGreetingMessage] = useState('');
  
  const [isMade, setIsMade] = useState(true);

  const {userName, setUserName} = useUserName();

  const submitUserName = (e) => {
    e.preventDefault();
    console.log(userName);
    setIsMade(true)
  }

  let name;
  if (isMade) {
    name = (
      <span>{userName}</span>
    )
  }

  const openNameInput = () => {
    setIsMade(false);
  }

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
      {
        !isMade ?
          <form
            className="greeting-form"
            onSubmit={submitUserName}>
            <input
             placeholder="Enter name"
              type="text"
              value={userName}
              onChange={event => setUserName(event.target.value)}
            />
          </form>
          :
          <span
          
            className="user-name"
            onClick={openNameInput}
          >
            {name}!

            
          </span>
      }
    </div>
  );
}

export default Greeting;
