import React,{useState} from 'react'; //imports useState

function UseState() {//functional component
  
   const [count,setCount] = useState(0); 
   //const [new State,setter function ] = useState(initial state); 
   /*     setCount: Custom method that updates the state variable, registered here
             count: current value of state variable
      useState(0) : initial state property value set=0
   */
   return(
      <div>
          <h1>Counter App. using State Hooks</h1>
          <h2>You clicked {count}  times</h2>
          <button onClick={()=>setCount(count+1)}>     {/* Event handler subscription to setCount() */}
             <h3>Click Me</h3>
          </button>
        
      </div>
   )
}   

export default UseState;

