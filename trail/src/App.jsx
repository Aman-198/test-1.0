import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import "./App.css";

const App = () => {
  const [copiedUserId, setCopiedUserId] = useState(false);
  const [copiedPassword, setCopiedPassword] = useState(false);

  const userId = "Hello World";
  const password = "12364";

  const handleCopy = (text, setCopied) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="center-screen">
      <div className="copy-container">
        <label className="label">User ID:</label>
        <div className="input-copy-wrapper">
          <input type="text" readOnly value={userId} className="input-field" />
          <div className="copy-section">
            {copiedUserId && <div className="copied-tooltip">Copied!</div>}
            <button className="copy-icon" onClick={() => handleCopy(userId, setCopiedUserId)}>
              <FaRegCopy />
            </button>
          </div>
        </div>

        <label className="label">Password:</label>
        <div className="input-copy-wrapper">
          <input type="password" readOnly value={password} className="input-field" />
          <div className="copy-section">
            {copiedPassword && <div className="copied-tooltip">Copied!</div>}
            <button className="copy-icon" onClick={() => handleCopy(password, setCopiedPassword)}>
              <FaRegCopy />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
