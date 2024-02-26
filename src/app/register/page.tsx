import "@/styles/register.css"

export default function Register() {
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
        <p className="forumhadding">Welcome to TrustTrace !</p>
        <p className="headmsg">Register your account</p>
        <p className="forumvalue">Name</p>
        <input type="text" className="input-box" />
        <div className="mb-10"></div>
        <p className="forumvalue">Email</p>
        <input type="email" className="input-box" />
        <div className="mb-10"></div>
        <p className="forumvalue">User Name</p>
        <input type="text" className="input-box" />
        <div className="pb-10"></div>
        <p className="forumvalue">Password</p>
        <input type="password" className="input-box" />
        <div className="pb-10"></div>
        <div className="Signupbutton">
        <button className="regsiterbutton">Sign Up</button>
        </div>
        <div className="center">
          <div className="left-content">
            <p className="noaccount">Already have a TrustTrace Account? </p>
            <a className="siginlink" href="">Sign In</a>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}
