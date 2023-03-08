import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Sale from '../../components/Sale';
import Tabs from '../../components/Tabs';

function Home(){
    const navigate = useNavigate();
    const [user, setUser] = useState();
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('userAuth')));
    }, []);

    return (
        <div>
            
            <Sale id='sales'/>
            <Tabs id='tabs'/>
        </div>
    )
}
export default Home;
