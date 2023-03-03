import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import './style.css'

function Header() {
const [user, setUser] = useState();
useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('userAuth')));
}, []);
    return ( 
        <div>
            <div className="navBar">
                <Link to={'/'}><img src='' alt="Logo"></img></Link>
                <ul className="center">
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/`}>Promoções</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Carrinho</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Contato</Link>
                    </li>
                </ul>
                <p>{user}</p>
            </div>
        </div>
     );
}

export default Header;