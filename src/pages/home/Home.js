import React from 'react';
import "./Home.css";

import OnboardUser from "../../Component/OnboardUser/OnboardUser";
function Home() {
  return (
    <div className='mainPage'>
      <div className='userContainer'>
         <OnboardUser/>
      </div>
     

    </div>
  )
}

export default Home