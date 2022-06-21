import { useState } from 'react';

export default function State() {
  const [age, setAge] = useState(0);
  const [count, setCount] = useState(0);

  // In this example, the count state variable holds a number. Clicking the button increments it.
  function handleClick() {
    setCount(count + 1);
  }

  // Updating state based on the previous state
  function decrement() {
   
    setAge(age - 1); // setAge(42 - 1)
    setAge(age - 1); // setAge(42 - 1)
    setAge(age - 1); // setAge(42 - 1)
    // setAge(10, console.log('Hi there'));
  }

  // To solve this problem, you may pass an updater function to setAge instead of the next state:

  function increment() {
    setAge(a => a + 1); // setAge(42 => 43)
    setAge(a => a + 1); // setAge(43 => 44)
    // we can pass 2nd parameter inside setState
    setAge(a => a + 1,console.log('hii there')); // setAge(44 => 45)
  }
  
  return (
    <>
      <h1>Calculate count: {count}</h1>
      <h2>In this example, the count state variable holds a number. Clicking the button increments it.</h2>
      <button onClick={handleClick}>
        You pressed me {count} times
      </button>
      <h1>Your age: {age}</h1>
      <h2>Updating state based on the previous state</h2>
      <button onClick={() => {
        decrement();
      }}>-3</button>
      <h1>Your age: {age}</h1>
      <h2>To solve this problem, you may pass an updater function to setAge instead of the next state </h2>
      <button onClick={() => {
        increment();
      }}>+3</button>
    </>
  );
}

