import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ProdContext } from "../Context/Context";
//style
import "./register.css";

function Register() {
  //taken from context
let {openRegister, setOpenRegister} = useContext(ProdContext);
  //count for login and account
  const [count, setCount] = useState(0);
  console.log("Bolean", openRegister);
  return (
    <div className="register-container">
      
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
              {count === 0 && (
                <form>
                  <input
                    type="email"
                    placeholder="Email..."
                    name="email"
                    id=""
                  />
                  <input
                    type="password"
                    placeholder="Password..."
                    name="password"
                    id=""
                  />
                  <button>LOGIN</button>
                </form>
              )}
              {count === 1 && (
                <form>
                    <input
                    type="username"
                    placeholder="username..."
                    name="username"
                    id=""
                  />
                  <input
                    type="email"
                    placeholder="Email..."
                    name="email"
                    id=""
                  />
                  <input
                    type="password"
                    placeholder="Password..."
                    name="password"
                    id=""
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
