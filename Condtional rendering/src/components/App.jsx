import React from "react";
import form from "./File";

var isLogged = true;

function renderConditionally()
{
  if (isLogged === true)
  {
    return <h1>Hello</h1>
  }
  else
  {
    return 
  }
   <
}

function App() {
  return 
    <div className="container">
      {renderConditionally()}
    </div>;
}

export default App;
