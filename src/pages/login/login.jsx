import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/userSlice";
import "./login.css"; // Path: client\src\pages\login\login.css
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser } from "../../store/reducerAPI";
function Login() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      await loginUser(data, dispatch);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="log_container">
      <div className="login">
        <div className="log_left">
          <h1>EXPLORE</h1>
          <b>THE</b>
          <span>WAP</span>
          <span>TECHNOLOGY</span>
          <p>You don't have an account?</p>
          <Link to="/">
            <button>Register</button>
          </Link>
        </div>
        <div className="log_right">
          <h1>login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("USERNAME")}
              type="text"
              placeholder="Username"
            />
            <input
              {...register("USER_PASSWORD")}
              type="password"
              placeholder="Password"
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
