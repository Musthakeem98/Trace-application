"use client"
import { useState } from "react";
import "@/styles/credscore_calculator.css";

export default function ScoreCalculator() {
  const [hasDescription, setHasDescription] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [followingCount, setFollowingCount] = useState("");
  const [isVerified, setIsVerified] = useState("");
  const [favoritesCount, setFavoritesCount] = useState("");
  const [accountAge, setAccountAge] = useState("");
  const [userNameSimilarity, setUserNameSimilarity] = useState("");
  const [followersCount, setFollowersCount] = useState("");
  const [statusCount, setStatusCount] = useState("");
  const [twitterListCount, setTwitterListCount] = useState("");
  const [retweetCount, setRetweetCount] = useState("");

  const handleInputChange = (setState:any) => (event: any) => {
    setState(event.target.value);
  };

  return (
    <div>
      <div className="menubar">
        <div>
        <a href="/" className="logoLink"> {/* Link to the home page */}
            <img className="logoimage" src="/images/logoWhite.png" alt="logo" />
          </a>
          <a href="/login" className="logintext">
            Login
          </a>
          <a href="/fact_checker" className="headders">
            Fact Checker
          </a>
        </div>
      </div>
      <div className="body">
        <p className="bodytext">
          Calculate the credibility score for Twitter Account !
        </p>
        {/* <div className="gap"></div> */}
      </div>
      <div className="forumcontainer">
        <div className="leftconatiner">
          <div className="value">
            <p className="forumvalue">Has a User Description:</p>
            <div className="dropdownContainer">
              <select
                className="dropdown"
                value={hasDescription}
                onChange={handleInputChange(setHasDescription)}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="value">
            <p className="forumvalue">User Location:</p>
            <input
              type="text"
              className="input-box"
              value={userLocation}
              onChange={handleInputChange(setUserLocation)}
            />
          </div>
          <div className="value">
            <p className="forumvalue">Number of Following:</p>
            <input
              type="text"
              className="input-box"
              value={followingCount}
              onChange={handleInputChange(setFollowingCount)}
            />
          </div>
          <div className="value">
            <p className="forumvalue">Account verified or not:</p>
            <div className="dropdownContainer">
              <select
                className="dropdown"
                value={isVerified}
                onChange={handleInputChange(setIsVerified)}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="value">
            <p className="forumvalue">Favorites Count:</p>
            <input
              type="text"
              className="input-box"
              value={favoritesCount}
              onChange={handleInputChange(setFavoritesCount)}
            />
          </div>
          <div className="value">
            <p className="forumvalue">Account Age:</p>
            <div className="dropdownContainer">
              <select
                className="dropdown"
                value={accountAge}
                onChange={handleInputChange(setAccountAge)}
              >
                <option value="">Select an option</option>
                <option value="one">1-Year</option>
                <option value="two">2-Years</option>
                <option value="more">More than 2 years</option>
              </select>
            </div>
          </div>
        </div>
        <div className="rightconatiner">
          <div className="value">
            <p className="forumvalue">User name and Screen name similarity:</p>
            <div className="dropdownContainer">
              <select
                className="dropdown"
                value={userNameSimilarity}
                onChange={handleInputChange(setUserNameSimilarity)}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="value">
            <p className="forumvalue">Number of Followers:</p>
            <input
              type="text"
              className="input-box"
              value={followersCount}
              onChange={handleInputChange(setFollowersCount)}
            />
          </div>
          <div className="value">
            <p className="forumvalue">Status Count:</p>
            <input
              type="text"
              className="input-box"
              value={statusCount}
              onChange={handleInputChange(setStatusCount)}
            />
          </div>
          <div className="value">
            <p className="forumvalue">Twitter List Count:</p>
            <input
              type="text"
              className="input-box"
              value={twitterListCount}
              onChange={handleInputChange(setTwitterListCount)}
            />
          </div>
          <div className="value">
            <p className="forumvalue">Retweet Count:</p>
            <input
              type="text"
              className="input-box"
              value={retweetCount}
              onChange={handleInputChange(setRetweetCount)}
            />
          </div>
        </div>
      </div>
      <div className="buttoncontianer">
        <button className="generatebutton">Calculate</button>
      </div>
      <div className="gap">
        <div className="body">
          <p className="bodytext">Generate the overall score for the tweet !</p>
        </div>
      </div>
      <div className="pb-30"></div>
      <div className="buttoncontianer">
        <button className="generatebutton">Generate</button>
      </div>
      <div className="mb-30"></div>
    </div>
  );
}
