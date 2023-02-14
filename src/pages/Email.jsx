import React from "react";
import "../Styles/Email.css";
import box from "../Images/inboximg.png";
import { Link } from "react-router-dom";

const Email = () => {
  return (
    <div className="lastbody">
      <div className="lastpage">
        <div className="lastpage1">
          <h5>You're Almost In!</h5>
          <h4>Welcome Samuel</h4>
          <img src={box} alt="" />
        </div>
        <p>
          An activation link has been sent to Ireti4tech@gmail. com Please click
          on the link to verify your email and activate your TradExpress
          account.
        </p>
        <Link className="logb" to="/Login">
          Log in
        </Link>
        <div className="last1nav">
          <h6>Already have an account?</h6>
          <h5>Click here</h5>
        </div>
      </div>
    </div>
  );
};

export default Email;
