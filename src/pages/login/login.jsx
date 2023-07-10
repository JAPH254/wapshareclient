import "./login.css"; // Path: client\src\pages\login\login.css
import {Link} from "react-router-dom";
function Login() {
  return (
    <div className="log_container">
      <div className="login">
        <div className="log_left">
          <h1>EXPLORE</h1>
          <b>THE</b>
          <span>WAP</span>
          <span>TECHNOLOGY</span>
          <p>You don't have an account?</p>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="log_right">
          <h1>login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
