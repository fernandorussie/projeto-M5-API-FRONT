import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar'
import Product from '../../components/Sanduiches';
import Sale from '../../components/Sale';
import Tabs from '../../components/Tabs';
import Footer from '../../components/Footer';

function Home(){
    const navigate = useNavigate();
    const [user, setUser] = useState();
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('userAuth')));
    }, []);

    return (
        <div>
            <Navbar/>
            <Sale id='sales'/>
            {/* <Product/> */}
            <Tabs id='tabs'/>
            {/* <h1>Bem vindo(a) {user}!</h1> */}
            <Footer/>
        </div>
    )
}
export default Home;
