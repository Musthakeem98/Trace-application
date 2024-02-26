import "./globals.css"

export default function Home() {
  return (
    <div>
      <div className="menubar">
       <div >
          <img className="logoimage" src="/images/logo.png" alt="logo" />
            <a href="login-page.html" className="logintext">Login</a>
            <a href="credscore-calculator-page.html" className="headders">CredScore Calculator</a>
            <a href="fact-checker-page.html" className="headders">Fact Checker</a>

       </div>
       <div className="loginbody">
        <div className="contentContainer">
          <div className="welcomeText">
            <p className="msgheading">Unraveling</p>
            <p className="msgheading">Truth</p>
            <p className="msgheading">in Sinhala Tweets</p>
            <div className="mb-1"></div>
            <p className="subMsg">Your steadfast Sinhala Guardian standing vigilant </p>
            <p className="subMsg">against the tide of Twitter misinformation.</p>
            <button className="button-style">Verify</button>
          </div>
          <img className="loginimg" src="/images/stockpic.png" alt="loginpage image" />
        </div>
      </div>
      </div>
    </div>
  );
}
