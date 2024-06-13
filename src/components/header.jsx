import React from 'react';
import "../components/css/header.css";
import { Link } from "react-router-dom";


const flexCenter = 'flex justify-between items-center';
const hiddenMdFlex = 'hidden md:flex';
const hoverUnderline = 'hover:underline';




const Navbar = () => {
    return ( 
        <div className=" flex bg-zinc-900 text-white p-4 md:flex justify-between items-center">
            <div className="text-2xl font-bold">Portfolio</div>
            <div className= 'text-lg'>
                OJO EMMANUEL TIWALADE
            </div>
            <button className="md:hidden">
                <img aria-hidden="true" alt="menu" src="https://placehold.co/20" />
            </button>
        </div>
    );
};

export default Navbar;
