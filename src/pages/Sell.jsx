import React from "react";
import "../Styles/Sell.css";
import { Link } from "react-router-dom";

const Sell = () => {
  return (
    <div className="Sellbody">
      <form className="Sellform">
        <h1>Buy/Sell Instantly</h1>
        <div className="Buylink">
          <Link className="Buylink1" to="/Buy">
            <p>Buy</p>
          </Link>

          <div className="Buylink2">Sell</div>
        </div>

        <div className="input1">
          <h5>Coin to Sell==</h5>
          {/* <input className="input2" placeholder="Bitcoin (BTC)" type="text" /> */}
          <select  name="" id="">
            <option value="btc">Naira (NGN)</option>
            <option value="eth">Dollars (USDT)</option>
            <option value="btc">Euros (E)</option>
            <option value="btc">Cedis (C)</option>
          </select>
        </div>

        <div className="input2">
          <h5>Currency</h5>
          {/* <input className="input2" placeholder="Naira (NGN)" type="text" /> */}
          <select  name="" id="">
            <option value="btc">Naira (NGN)</option>
            <option value="eth">Dollars (USDT)</option>
            <option value="btc">Euros (E)</option>
            <option value="btc">Cedis (C)</option>
          </select>
        </div>

        <div className="input3">
          <h5>Amount</h5>
          <div className="inflex">
            {/* <p>NGN</p> */}
            <input className="input2" type="number" />
          </div>
        </div>

        <Link className="selllog" to="/Email">
          Continue
        </Link>
      </form>
    </div>
  );
};

export default Sell;
