import React from 'react'
import Hero from './Hero';
import Brokerage from './Brokerage';
import Footer from '../home/Footer';
import Navbar from '../home/Navbar';
import OpenAccount from '../home/OpenAccount';

function PricingPage(){
    return(
        <>
            <Hero/>
            <Brokerage/>
            <Footer/>
            <Navbar/>
            <OpenAccount/>
        </>
    );   
}
export default PricingPage;