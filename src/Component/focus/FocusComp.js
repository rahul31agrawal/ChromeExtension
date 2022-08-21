import React from 'react';
import "./FocusComp.css";
import { useUserName } from '../../context/userContex';
function FocusComp() {

    const { userFocus } = useUserName();
  return (
    <div className='focusContainer'>
        <h4>Focus for today:</h4>
        <h4>{userFocus}</h4>
        
        </div>
  )
}

export default FocusComp