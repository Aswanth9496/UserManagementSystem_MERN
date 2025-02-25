import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";
import "./UserRigister.css";

const UserRegister = () => {
  return (
    <div className="register-page">
      
      <section className="register-container">
        <div className="register-card">
          <div className="welcome-message">
            <h1>Create an Account</h1>
            <p>Sign up to get started</p>
          </div>

          <div className="register-form">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" />

            <button className="register-btn">Register</button>
            
            <p className="login-link">
              Already have an account? <span>Sign in</span>
            </p>

            <div className="divider">
              <span>Or sign up with</span>
            </div>

            <div className="social-register">
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

export default UserRegister;
