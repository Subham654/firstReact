import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text); 
    let newText = text.toUpperCase();
    setText(newText)
  };

   const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text); 
    let newText = text.toLowerCase();
    setText(newText)
  };

   const reverseString = () => {
    setText(text.split('').reverse().join(''));
  };


  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [palindrome, setPalindrome] = useState(false);
  const [text, setText] = useState("");

  const checkPalindrome = () => {
    const cleaned = text.toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    setPalindrome(cleaned === reversed);
    {palindrome?alert("true"):alert("false")}
    console.log("palindrome",palindrome)
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
      </div>

    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>preview</h2>
      <p>{text}</p> 
    </div>
    </>
  );
}
