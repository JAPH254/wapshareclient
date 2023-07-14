import './Register.css'
//importing register from register.css
import {Link} from "react-router-dom";
function Register() {
  return (
    <div className="reg_container">
      <div className="register">
        <div className="reg_left">
          <h1>EXPLORE</h1>
          <b>THE</b>
          <span>WAP</span>
          <span>TECHNOLOGY</span>
          <p>Do you have an account?</p>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="reg_right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Full Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
