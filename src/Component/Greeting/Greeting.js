import React, { useEffect, useState } from "react";
import "../Time/Time.css";

function Greeting() {
  const [greetingMessage, setGreetingMessage] = useState("");
  const [userName, setuserName] = useState("");

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
    <div className="time-card greeting">
      <span>{greetingMessage}</span>
      <br />
      <form>
        <input type="text" 
        onChange={(e)=>setuserName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Greeting;
