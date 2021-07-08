import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  }

  const [heading, setHeading] = useState("");
  function change(event) {
    setHeading(name);
  }
  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={change}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
