import React, { useState } from 'react'

const App = () => {
  const [monitor, remote] = useState("MOHAN");
  console.log("re-rendered", monitor);
  const handleChange = (e) => {
    // let val = e.target.value;
    setTimeout(() => {
      // console.dir(val)
      // remote(val.toUpperCase());
      if(e.nativeEvent.inputType === "deleteContentBackward"){
        remote(e.target.value.substring(0, e.target.value.length - 1));
      }else{
        remote(e.target.value + e.nativeEvent.data);
      }
    }, 1000);
    console.log(monitor);
  }
  return (
    <div>
      <p>Name</p>
      <input value={monitor} placeholder='Please enter here' type="text" onChange={handleChange} />
      <h3>Hello {monitor} !</h3>
    </div>
  )
}

export default App