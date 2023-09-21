import React from 'react';
import { NavLink } from 'react-router-dom';
import img from "./../22.jpg";
import './../style/home.css'

const Home = () => {
    return (
        <div>
            <div className='header'>
                <h1>Vente Plus</h1>
                <ul>
                    <NavLink to="/register">
                        <li>S'inscrire</li>
                    </NavLink>
                    <NavLink to="/login">
                        <li>Se connecter</li>
                    </NavLink>
                </ul>
            </div>
            <center>
                <h2>API de gestion de stock et règlement des factures en temps réel.</h2>
                <img src={img} alt="" />
            </center>
        </div>
    );
};

export default Home;