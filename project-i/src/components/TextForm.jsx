import React, { useState, useEffect } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const reverseString = () => {
    setText(text.split("").reverse().join(""));
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [palindrome, setPalindrome] = useState(false);
  const [text, setText] = useState("");

  const checkPalindrome = () => {
  const cleaned = text.toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  const isPalindrome = cleaned === reversed;

  setPalindrome(isPalindrome);
  
  alert(isPalindrome ? "✅ It is a Palindrome" : "❌ Not a Palindrome");
  console.log("palindrome", isPalindrome);
};

const findLongestWord = () => {
  const words = text.trim().split(/\s+/); // split by any space
  if (words.length === 0 || text.trim() === "") {
    alert("⚠️ Please enter some text first.");
    return;
  }

  let longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");
  alert(`🔍 Longest word: "${longest}"`);
};

const checkPangram = () => {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const cleaned = text.toLowerCase().replace(/[^a-z]/g, '');

  const uniqueLetters = new Set(cleaned);

  if (uniqueLetters.size === 26) {
    alert("✅ It's a Pangram (contains all letters A-Z)");
  } else {
    alert(`❌ Not a Pangram. Missing ${26 - uniqueLetters.size} letter(s).`);
  }
};

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={reverseString}>
          Reverse string
        </button>
        <button className="btn btn-primary mx-1" onClick={checkPalindrome}>
          Check Palindrome
        </button>
        <button className="btn btn-primary mx-1" onClick={findLongestWord}>
          Find Longest Word
        </button>
        <button className="btn btn-primary mx-1" onClick={checkPangram}>
          Check Pangram
        </button>
      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
