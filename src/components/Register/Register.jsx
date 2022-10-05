import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ProdContext } from "../Context/Context";
import axios from "axios";
//style
import "./register.css";
import { useEffect } from "react";

function Register() {
  //taken from context
  let {
    openRegister,
    setOpenRegister,
    isSignedIn,
    setIsSignedIn,
    signIn,
    setSignIn,
    users,
    setUsers,
    goToPayment,
    setGoToPayment,
  } = useContext(ProdContext);
  // //state to switch between login and create account
  const [count, setCount] = useState(0);
  //for signin

  //for signup newuser
  const [signUp, setSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });
  //state for users

  console.log("Bolean", openRegister);

  //onchange fns
  // signin
  const handleChangeSignIn = (e) => {
    setSignIn({ ...signIn, [e.target.name]: e.target.value });
  };

  const handleSubmitSignIn = (e) => {
    e.preventDefault();

    if (
      users.some(
        (item) =>
          item.email === signIn.email && item.password === signIn.password
      )
    ) {
      setIsSignedIn(true);
      setOpenRegister(false);
      setGoToPayment(true);
      alert("Sign In is successfully done");
    } else {
      setIsSignedIn(false);
      alert("E-Mail or Password is wrong !");
    }
  };
  console.log("Is signed in: ", isSignedIn);
  // signup
  const handleChangeSignUp = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    axios.post(
      "https://sgujuluva-nike-clone.herokuapp.com/users/create",
      signUp
    );
    alert("Sign up is successfully done");
    setSignUp({
      username: "",
      email: "",
      password: "",
    });
    setCount(0); //after signup , closing the register component
  };

  let getUser = async () => {
    let res = await fetch(
      "https://sgujuluva-nike-clone.herokuapp.com/users/getusers"
    );
    let json = await res.json();

    return json;
  };

  useEffect(() => {
    getUser().then((result) => setUsers(result));
  }, []);
  console.log("This is the users", users);

  return (
    <div className={openRegister ? "show" : "register-container"}>
      <div className="container">
        <div className="your-account">
          <div onClick={() => setOpenRegister(false)} className="close-btn">
            <h2>X</h2>
            <h2>Close</h2>
          </div>
          <div className="heading">
            <h1>Your Account</h1>
            <div className="accounts">
              <h3
                onClick={() => setCount(0)}
                className={count === 0 && "underline"}
              >
                Sign In
              </h3>
              <h3
                onClick={() => setCount(1)}
                className={count === 1 && "underline"}
              >
                Create Account
              </h3>
            </div>
            {/* =========================== signin ================= =======================*/}
            {count === 0 && (
              <form onSubmit={handleSubmitSignIn}>
                <input
                  onChange={handleChangeSignIn}
                  type="email"
                  placeholder="Email..."
                  name="email"
                  id=""
                  value={signIn.email}
                />
                <input
                  onChange={handleChangeSignIn}
                  type="password"
                  placeholder="Password..."
                  name="password"
                  id=""
                  value={signIn.password}
                />
                <button>LOGIN</button>
              </form>
            )}
            {/* ==================signout==================================================== */}
            {count === 1 && (
              <form onSubmit={handleSubmitSignUp}>
                <input
                  onChange={handleChangeSignUp}
                  type="username"
                  placeholder="username..."
                  name="username"
                  id=""
                  value={signUp.username}
                />
                <input
                  onChange={handleChangeSignUp}
                  type="email"
                  placeholder="Email..."
                  name="email"
                  id=""
                  value={signUp.email}
                />
                <input
                  onChange={handleChangeSignUp}
                  type="password"
                  placeholder="Password..."
                  name="password"
                  id=""
                  value={signUp.password}
                />
                <button>SIGN UP</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
