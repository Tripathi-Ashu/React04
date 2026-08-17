
import {useState }  from 'react';


function Counting({name}) {
   const [count , setCount] = useState(0);
   console.log(name);

   return ( 
    <>
    <p>Our first Counter app : {name}</p>
    <h2>Counter: {count}</h2>
    <button  onClick={() => setCount(count + 1)}>Increment</button>
    </>
   )
};


export default Counting;


