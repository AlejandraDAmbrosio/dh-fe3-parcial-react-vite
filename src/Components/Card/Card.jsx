import React from "react";


const Card = ({ petBreed, petName }) => {
    return (
        <div>
            <h2>¡Hola! La raza de tu mascota es: {petBreed} </h2>
            <h2>y su nombre es: {petName} </h2>
        </div>
    );
};


export default Card;