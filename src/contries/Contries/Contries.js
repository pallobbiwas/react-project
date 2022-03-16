import React, { useEffect, useState } from "react";
import Contry from "../Contry/Contry";
import "./Contries.css";

const Contries = () => {
  const [contries, setContris] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setContris(data));
  }, []);
  return (
    <div>
      <h1>Can i visit all country...?</h1>
      <h2>Total Country: {contries.length}</h2>
      <div className="country-container">
        {contries.map((contry) => (
          <Contry contry={contry}
          key={contry.cca3}
          ></Contry>
        ))}
      </div>
    </div>
  );
};

export default Contries;
