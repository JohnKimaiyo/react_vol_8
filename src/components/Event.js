import React from "react";

export default function Event() {
  const testClick = () => {
    alert("Good Monring React Developer Kimaiyo");
  };

  return (
    <div calssName="App">
      <button onClick={testClick}>Click Me</button>
    </div>
  );
}
