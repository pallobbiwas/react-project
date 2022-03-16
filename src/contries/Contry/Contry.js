import React from 'react';
import "./Contry.css";

const Contry = (props) => {
    const {area, population, startOfWeek, region, name, flags} = props.contry;
    return (
        <div className='contary'>
            <h1>name: {name.common}</h1>
            <img src={flags.png} alt="" />
            <h3>Area: {area}</h3>
            <h3>Population: {population}</h3>
            <h3>Week: {startOfWeek}</h3>
            <h3>region: {region}</h3>
        </div>
    );
};

export default Contry;