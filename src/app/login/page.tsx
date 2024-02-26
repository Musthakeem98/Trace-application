import "@/styles/login.css"

export default function Login() {
  return (
    <div>
      <div className="logincontainer">
       <div className="piccontainer">
          <img className="logoimage" src="/images/logo.png" alt="logo" />
          <div className="loginbody">
          <img className="loginimg" src="/images/stockpic.png" alt="loginpage image" />
        </div>
        </div>
        <div className="loginform">
        <p className="forumhadding">Log into TrustTrace</p>
        <p className="forumvalue">User Name</p>
        <input type="text" className="input-box" />
        <div className="pb-20"></div>
        <div className="password">
        <p className="forumvalue">Password</p>
        <a className="forgotPassword" href="">Forgot Password</a>
        </div>
        <input type="password" className="input-box" />
        <div className="pb-20"></div>
        <div className="remember">
          <div className="left-content">
            <input className="box" type="checkbox" id="rememberMe" name="rememberMe" />
            <label className="checkboxlable" htmlFor="rememberMe">Remember me for 30 days</label>
          </div>
        </div>
        <div className="center">
        <button className="loginbutton">Login</button>
        </div>
        <div className="pb-10"></div>
        <div className="center">
          <div className="left-content">
            <p className="noaccount">Don’t have a TrustTrace Account? </p>
            <a className="siginlink" href="">Register Now</a>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}
