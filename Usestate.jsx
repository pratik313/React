import React, { useState } from 'react';
import './Usestate.css'


function Fun() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='Box'>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Fun;

// import React, { Usestate } from 'react'

// export default function Usestate() {
//     const [count1,setcount1]=Usestate(0);
//     const [no,setno]=Usestate(0);

//     let x=0;
//     function count(parm){
//         x++;
//         console.log("🚀 ~ file: Usestate.jsx:8 ~ Usestate ~ 0:", 0)
//         set(no++)
        
//     }
//     return (
//         <div>
//             <div onClick={()=>set}>CLICK HERE </div>
//             <h1>{x}</h1>
//         </div>
//     );}


