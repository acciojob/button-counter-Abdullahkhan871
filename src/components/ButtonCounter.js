import React, { useState } from "react";

const ButtonCounter = () => {
  const [btn, Setbtn] = useState(0);

  return (
    <div>
      <p>Button clicked {btn} times</p>
      <button onClick={()=>Setbtn(btn+1)}>click</button>
    </div>
  );
};

export default ButtonCounter;
