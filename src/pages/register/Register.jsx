import './Register.css'
import { useForm } from "react-hook-form";
import { registerUser } from '../../store/reducerAPI';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//importing register from register.css
import {Link} from "react-router-dom";

function Register() {
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
const dispatch = useDispatch()
  const onSubmit = async(data) => {
    try{
      await registerUser(data, dispatch)
      navigate("/login")
    }catch(error){
      alert(error.message)
    }
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("USERNAME")} type="text" placeholder="Username" />
            <input {...register("USER_PASSWORD")}type="password" placeholder="Password" />
            <input {...register("EMAIL")}type="text" placeholder="Email" />
            <input {...register("FULL_NAME")}type="text" placeholder="Full Name" />
            <button >Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
