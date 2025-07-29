import React from "react";
import "./App.css";

const App = () => {
  const text = "Hello World";

  return (
    <div className="center-wrapper">
      <div className="copy-container">
        <label className="label">User ID:</label>
        <input type="text" readOnly value={text} className="input-field full-width" />
      </div>
    </div>
  );
};

export default App;
