import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header'


function Home(){
    const navigate = useNavigate();
    const [user, setUser] = useState();
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('userAuth')));
    }, []);

    function Loggout(){
        localStorage.clear();
        console.log("Deslogado, limpou tudo :)");
        navigate('/', { replace: true })
    }

    return (
        <div>
            <Header/>
            <h1>Bem vindo(a) {user}!</h1>
            <button onClick={Loggout}>Sair</button>
        </div>
    )
}
export default Home;