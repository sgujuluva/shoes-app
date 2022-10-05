import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProdContext } from "../Context/Context";

function Payment() {
  const { openRegister, setOpenRegister, signIn, setSignIn, users, setUsers } =
    useContext(ProdContext);
  let navigate = useNavigate();
  console.log("open reg is:", openRegister);

  let foundUser = users.find((item) => item.email === signIn.email);
  let handleGo = () => {
    navigate("/");
  };
  return (
    <div className="payment">
      <div className="paymentContainer">
        <h1>Hi {foundUser?.username}, This is the gateway for payment</h1>
        <h2>Thank you for your visit</h2>
        <button onClick={handleGo}>Go back to the main</button>
      </div>
    </div>
  );
}

export default Payment;
