import { useState, useRef, useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FaUserPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import AuthContext from "../contexts/AuthContext";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePwdVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email || !password) {
      toast.error("Please fill out all fields to login");
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB5tdcjlszYCfz70fgr4jqazeg-W-zO7_I`,
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
      const responseData = await response.json();
      emailRef.current.value = "";
      passwordRef.current.value = "";
      loginUser(responseData.idToken, email);
      localStorage.setItem("token", responseData.idToken);
      localStorage.setItem("email", responseData.email);
      toast.success("Logged in successfully!");
      history.replace("/");
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="login">
      <form className="form" noValidate>
        <h2>login</h2>
        <p>welcome back! please enter your details.</p>
        <div className="input-box">
          <input
            type="email"
            ref={emailRef}
            autoComplete="off"
            placeholder="Enter Email"
            autoFocus
          />
          <span>
            <CgMail />
          </span>
        </div>

        <div className="input-box">
          <input
            type={isPasswordVisible ? "text" : "password"}
            ref={passwordRef}
            autoComplete="off"
            placeholder="Enter Password"
            onPaste={(e) => e.preventDefault()}
          />
          <button
            type="button"
            onClick={handlePwdVisibility}
            className="pwd-icon"
          >
            {isPasswordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>

        <Link
          to="/forgot-password"
          className={`forgot-pwd-link ${isLoading && "btn-disabled"}`}
          disabled={isLoading}
        >
          forgot password?
        </Link>

        <button
          type="submit"
          onClick={handleLogin}
          className={`btn form-btn ${isLoading && "btn-disabled"}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader className="small-loader" />
          ) : (
            <>
              login <FaUserPlus />
            </>
          )}
        </button> 

        <p>
          don't have an account?{" "}
          <Link
            to="/register"
            className={isLoading ? "btn-disabled" : ""}
            disabled={isLoading}
          >
            register
          </Link>
        </p>
      </form>
    </main>
  );
};
export default LoginPage;
