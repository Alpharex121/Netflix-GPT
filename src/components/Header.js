import React, { useEffect } from "react";
import "../css/header.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, languages } from "../utils/constants";
import { changeGptPage } from "../utils/gptSearchSlice";
import { changeLang } from "../utils/langSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const isGptPage = useSelector((store) => store?.gptSearch?.gptPage);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGptBtn = () => {
    dispatch(changeGptPage());
  };
  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!user) return;

  return (
    <>
      <div className="netflix-logo">
        <div className="main-logo">
          <img src={LOGO} alt="logo" />
        </div>
        {isGptPage && (
          <div className="language-btn">
            <select onChange={handleLangChange}>
              {languages.map((language) => (
                <option key={language.indentifies} value={language.indentifies}>
                  {language.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="gpt-search-btn-cont">
          <button onClick={handleGptBtn}>
            {isGptPage ? "Homepage" : "GPT Search"}{" "}
          </button>
        </div>
        <div className="user-logo">
          <img src={user.photoURL} alt="" />
          {user && (
            <button onClick={handleSignOut} className="sign-out-btn">
              Sign Out
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
