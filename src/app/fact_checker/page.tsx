"use client"
import "@/styles/fact_checker.css"
import { useState } from "react";

export default function Fact_Checker() {
  const [newsText, setNewsText] = useState("");

  const handleNewsTextChange = (event: any) => {
    setNewsText(event.target.value);
  };

  
  return (
    <div>
      <div className="menubar">
       <div >
       <a href="/" className="logoLink"> {/* Link to the home page */}
            <img className="logoimage" src="/images/logoWhite.png" alt="logo" />
          </a>
            <a href="/login" className="logintext">Login</a>
            <a href="/credscore_calculator" className="headders">CredScore Calculator</a>
       </div>
      </div>
      <div className="body">
        <p className="bodytext">Generate an accuracy score for the tweet!</p>
        <div className="textAreaContainer">
          <textarea
            className="textarea"
            cols={30}
            rows={10}
            value={newsText} 
            onChange={handleNewsTextChange} 
            placeholder="Enter the news here"
          ></textarea>
        </div>
        <div className="buttoncontianer">
        <button className="generatebutton">Generate</button>
        </div>
      </div>
    </div>
  );
}
