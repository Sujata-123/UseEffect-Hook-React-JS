import React, { useState, useEffect } from 'react';
const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  // useEffect takes two parameter one is
  // function and other is an array
  //the second paramenter will tell when the use
  //effect will run here the array is empty
  //means it will run only when the first render is after that it will not rerun because the
  //array is empty
  //component didmount
  // useEffect(()=>{
  //   console.log('The use effect run');
  // },[])
  //component did update
  // useEffect(()=>{
  //   console.log('The use effect run')
  // },[count,count2])

  //component will unmount

  useEffect(() => {
    console.log('The use effect ran');
    return () => {
      console.log('the return is being ran');
    };
  }, []);
  //this code will update no matter what , it will update on everything
  //so its important to pass either empty array, or choice of yours what you want to
  //update
  // useEffect(() => {
  //   console.log('The use effect ran');
  // });
  return (
    <div>
      <h6>Counter</h6>
      <p>current count: {count}</p>
      <p>current count2:{count2}</p>
      <button onClick={() => setCount(count + 1)}>Increment the count</button>
      <button onClick={() => setCount2(count2 + 1)}>
        Increment the count2
      </button>
    </div>
  );
};
export default Counter;
