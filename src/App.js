import "./App.css";

import React, { useState } from "react";

function ResponsiveWordCounter() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  return (
    <div class="i1">
    <div className="centered-box">
      <h2>Responsive Paragraph Word Counter</h2>
      <textarea rows="10" cols="50" value={text} onChange={handleTextChange} />
      <p>Word Count: {countWords(text)}</p>
    </div>
    </div>
  );
}

export default ResponsiveWordCounter;
