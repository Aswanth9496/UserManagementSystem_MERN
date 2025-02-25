import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      
      <section className="login-container">
        <div className="login-card">
          <div className="welcome-message">
            <h1>Welcome Back!</h1>
            <p>Please sign in to continue</p>
          </div>

          <div className="login-form">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
            
            <div className="forgot-password">
              <span>Forgot Password?</span>
            </div>
            
            <button className="login-btn">Login</button>
            
            <p className="register-link">
              Don't have an account? <span>Create one</span>
            </p>

            <div className="divider">
              <span>Or sign in with</span>
            </div>

            <div className="social-login">
              <button className="social-btn google">
                <FaGoogle className="icon" />
              </button>
              <button className="social-btn linkedin">
                <FaLinkedin className="icon" />
              </button>
              <button className="social-btn github">
                <FaGithub className="icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
