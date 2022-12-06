import React from "react";
import './Component.Style.css';
import { useLocation } from 'react-router-dom';


const Address = () => {
    const { state } = useLocation();
    console.log(state?.from);
    return (
        <div>
            <h1 style={{color: 'grey'}}>Grimmauld Place No. 12, Borough of Islington, London</h1>
        </div>

    );
};

export default Address;