import React, { useRef, useState } from "react";
import Header from "./Header";
import "../css/login.css";
import { Link } from "react-router-dom";
import { auth } from "../utils/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { checkValidate } from "../utils/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, PROFILE_IMG } from "../utils/constants";
import Footer from "./Footer";

const Login = () => {
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toogleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleOnClick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isLogin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: { PROFILE_IMG },
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoUrl: photoURL,
                })
              );
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error.code + "-" + error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          console.log(error.code + "-" + error.message);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="login-bg-img">
        <img src={BG_IMG} alt="bg-img" />
      </div>
      <div className="login-form">
        <h1 id="sign-in-text">{isLogin ? "Sign In" : "Sign Up"}</h1>
        <form
          action=""
          className="login-form-main"
          onSubmit={(e) => e.preventDefault()}
        >
          {!isLogin && (
            <input
              ref={name}
              className="login-form-input "
              type="text"
              placeholder="Enter Your Full Name"
            />
          )}

          <input
            ref={email}
            className="login-form-input "
            type="text"
            placeholder="Enter Your Email"
          />

          <input
            ref={password}
            className="login-form-input "
            type="password"
            placeholder="Enter Your Password"
          />

          <p className="validateError">{errorMessage}</p>
          <button id="login-btn" onClick={handleOnClick}>
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
          <p style={{ margin: 10 }}>
            {isLogin ? "Not registered yet? " : "Already a user? "}
            <span>
              <Link onClick={toogleLogin}>
                {isLogin ? "Sign Up" : "Sign In"}
              </Link>
            </span>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
