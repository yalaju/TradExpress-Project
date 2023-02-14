import React from "react";
import "../Styles/Section2.css";
import upimg from "../Styles/Greenup.png"
import downimg from "../Styles/reddown.png"

const Section2 = ({ newRate }) => {
  return (
    <div className="sec2body">
      {newRate.map((e) => {
        return (
          <div key={e.id}>
            <div className="you">
              <div>
                  <h6>{e.name}</h6>

                  <p>{e.percent_change_24h} </p>
                
                  {e.percent_change_24h.startsWith("-") ? (
                    <img src={upimg} />
                  ) : (
                    <img src={downimg} />
                  )}
              </div>
              <p>{e.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section2;
