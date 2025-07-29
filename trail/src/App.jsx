import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import "./App.css";

const App = () => {
  const [copied, setCopied] = useState(false);
  const text = "Hello World";

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="center-screen">
      <div className="copy-container">
        <label className="label">User ID:</label>
        <div className="input-copy-wrapper">
          <input type="text" readOnly value={text} className="input-field" />
          <div className="copy-section">
            {copied && <div className="copied-tooltip">Copied!</div>}
            <button className="copy-icon" onClick={handleCopy}>
              <FaRegCopy />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
