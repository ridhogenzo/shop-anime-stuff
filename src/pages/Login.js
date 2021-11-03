import React from "react";
import Kyou from "../assets/images/kyou.png";
export default function Login() {
  return (
    <div className="container">
      <div className="logo" style={{ marginTop: "250px" }}>
        <div className="login-auth">
          <img src={Kyou} alt="" className="login-logo" />
          <h4 className="login-title">Onion Smell Im Coming</h4>
          <div className="card bordered">
            <label htmlFor="email">Email</label>
          </div>
        </div>
      </div>
    </div>
  );
}
