// src/components/EyesOnMe.js
import React from "react";

function EyesOnMe() {
  // Event handler for focus
  function handleFocus() {
    console.log("Good!");
  }

  // Event handler for blur
  function handleBlur() {
    console.log("Hey! Eyes on me!");
  }

  return (
    <div>
      <button onFocus={handleFocus} onBlur={handleBlur}>
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;
