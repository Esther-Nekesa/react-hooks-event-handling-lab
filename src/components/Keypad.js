// src/components/Keypad.js
import React from "react";

function Keypad() {
  // Event handler for when the input value changes
  function handleChange() {
    console.log("Entering password...");
  }

  return (
    <div>
      <input type="password" onChange={handleChange} />
    </div>
  );
}

export default Keypad;
