import React from 'react'
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import CreateTicket from './CreateTicket';

function SupportPage(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <CreateTicket/>
            <OpenAccount/>
            <Footer/>
        </>
    );   
}
export default SupportPage;