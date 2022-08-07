
import './App.css';

import Todo from './Component/Todo/Todo';
import Greeting from './Component/Greeting/Greeting';
import Time from './Component/Time/Time';
import Weather from './Component/Weather/Weather';
import Quotes from './Component/Quotes/Quotes';


function App() {
  return (
    <div className="App">
      
      <div className='item2'>
      <Time/>
      </div>

      <div  className='item3'>
      <Greeting/>
      </div>

      <div className='item4'>
         <Weather/>
      </div>

      <div className='item5'>
      <Todo/>
      </div>

      <div className='item6'>
      <Quotes/>
      </div>
      
     
      
       
    </div>
  );
}

export default App;
