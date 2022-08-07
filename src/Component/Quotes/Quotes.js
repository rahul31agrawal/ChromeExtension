import React, {useEffect,useState} from 'react';
import "./Quotes.css";
import axios from 'axios';

function Quotes() {
    const [quote,setquotes]=useState('')

    useEffect(() => {
        (async () => {
          try {
            const response = await axios.get(
              "https://api.quotable.io/random?maxLength=100"
            );
            console.log(response.data.content);
            setquotes(response.data.content);
            
          } catch (e) {}
        })();
      }, []);
    

    return(
        <div className="quote-card">
            <span className='quoteHeading'>Quote of the day:</span>
            <br/>
            <span className='quote' >{quote}</span>
        </div>
    );
}

export default Quotes