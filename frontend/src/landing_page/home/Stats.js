import React from 'react';

function Stats() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1>Trust with confidence</h1>
                    <h2> Customer-first always </h2>
                    <p> That's why 1.3+ crore customers trust us with their investments </p>
                </div>
                <div className="col-6">
                    <img 
                        src="media/images/ecosystem.png"
                        alt="Stats img"
                        className="img-fluid"
                        style={{width:"80%"}}
                    />
                </div>
            </div>
        </div>
    );
}

export default Stats;