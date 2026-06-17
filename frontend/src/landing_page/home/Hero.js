import React from 'react';

function Hero(){
    return(
        <div className="container p-5">
            <div className="row text-center">
                <img src='media/images/homeHero.png' alt="Home img" className="mb-5"/>
                <h1> Invest In Everything </h1>
                <p>Online platform for investing in stocks, bonds, and other securities</p>
                <button className='p-2 btn btn-primary fs-5' style={{width: "20%", margin: "0 auto", backgroundColor: "blue", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px"}}>Signup Now</button>
            </div>
        </div>
    );   
}

export default Hero;