import React from "react";
import "../Styles/Buy.css";
import { Link } from "react-router-dom";

const Buy = () => {
  return (
    <div className="Buybody">
      <form className="Buyform">
        <h1>Buy/Sell Instantly</h1>
        <div className="Selllink">
          <div className="Selllink2">
            <p>Buy</p>
          </div>

          <Link className="Selllink1" to="/sell">
            Sell
          </Link>
        </div>

        <div className="input1">
          <h5>Coin to Buy</h5>
          <select  name="" id="">
            <option value="btc">Bitcoin (BTC)</option>
            <option value="eth">Etherum (ETH)</option>
            <option value="btc">Koins (K)</option>
            <option value="btc">Shitcoin (SH)</option>
          </select>
        </div>

        <div className="input2">
          <h5>Currency</h5>
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
            <input className="input2" type="number" />
          </div>
        </div>

        <Link className="con" to="/email">
          Continue
        </Link>
      </form>
    </div>
  );
};

export default Buy;
