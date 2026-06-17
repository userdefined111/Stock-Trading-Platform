import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/largestBroker.svg"
            alt="Awards img"
            className="mb-5"
          />
        </div>
        <div className="col-6">
          <h1> Largest Brokerage in India </h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading or investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks</p>
                </li>
                <li>
                  <p>Futures & Options</p>
                </li>
                <li>
                  <p>Mutual Funds</p>
                </li>
                <li>
                  <p>Bonds</p>
                </li>
              </ul>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
