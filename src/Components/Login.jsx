import HeaderComponent from '../Components/page_header/HeaderComponent';
import './LoginSignup.css';
import { AiTwotoneMail } from "react-icons/ai";
import { FaGoogle, FaFacebook, FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const Login = () => {
  return (
    <>
    <HeaderComponent item1='Login'></HeaderComponent>

    {/* login signup forms */}

    
<div className="container my-5">
<div className="row justify-content-center">
{/* Login Form */}
<div className="col-12 col-md-5 mb-4">
  <div className="card p-4 shadow-lg">
    <h2 className="text-center">Login</h2>
    <p className="text-center mb-4" style={{color:'#92949F'}}>Please Enter your detail to Sign In.</p>
    <div className="d-flex justify-content-center mb-3">
      <button className="btn google-btn me-2 w-100">
      <AiTwotoneMail /> Login with Email
      </button>
      <button className="btn facebook-btn w-100">
        <FaFacebook /> Login with Facebook
      </button>
    </div>
    <p className="text-center mb-3">Or</p>
    <div className="input-group mb-3">
      <span className="input-group-text">
        <FaEnvelope />
      </span>
      <input type="email" className="form-control" placeholder="Your Email" />
    </div>
    <div className="input-group mb-3">
      <span className="input-group-text">
        <FaLock />
      </span>
      <input type="password" className="form-control" placeholder="Password" />
    </div>
    <div className="d-flex justify-content-between mb-3">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="rememberMe" />
        <label className="form-check-label" htmlFor="rememberMe">
          Remember for 30 Days
        </label>
      </div>
      <a href="/" className="text-muted">Forget Password</a>
    </div>
    <button className="btn btn-dark w-100">Sign In</button>
  </div>
</div>

{/* Register Form */}
<div className="col-12 col-md-5">
  <div className="card p-4 shadow-lg">
    <h2 className="text-center">Sign up</h2>
    <p className="text-center mb-4" style={{color:'#92949F'}}>Please Enter your detail to Sign Up.</p>
    <div className="d-flex justify-content-center  mb-3">
      <button className="btn google-btn me-2  w-100">
      <AiTwotoneMail className='' />Login with Email
      </button>
      <button className="btn facebook-btn w-100">
        <FaFacebook /> Login with Facebook
      </button>
    </div>
    <p className="text-center mb-3">Or</p>
    <div className="input-group mb-3">
      <span className="input-group-text">
        <FaUser />
      </span>
      <input type="text" className="form-control" placeholder="First Name" />
    </div>
    <div className="input-group mb-3">
      <span className="input-group-text">
        <FaUser />
      </span>
      <input type="text" className="form-control" placeholder="Last Name" />
    </div>
    <div className="input-group mb-3">
      <span className="input-group-text">
        <FaEnvelope />
      </span>
      <input type="email" className="form-control" placeholder="Your Email" />
    </div>
    <div className="input-group mb-3">
      <span className="input-group-text">
        <FaLock />
      </span>
      <input type="password" className="form-control" placeholder="Password" />
    </div>
    <p className="text-muted">
      Your personal information helps improve your experience on our site,
      manage your account, and fulfill other purposes as detailed in our{" "}
      <a href="/" className="text-muted">privacy policy</a>.
    </p>
    <button className="btn btn-dark w-100">Sign Up</button>
  </div>
</div>
</div>
</div>
</>
  )
}

export default Login