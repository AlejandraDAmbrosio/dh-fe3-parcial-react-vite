import { useState } from "react";
import Card from "../Card/Card";

const Form = () => {
    const [pet, setPet] = useState({
        petBreed: "",
        petName: "",
    });

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLogged, setIsLogged] = useState(false);
    
    const handleChange = (e, propiedad) => {
        setPet({ ...pet, [propiedad]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const petBreedWithValidLength = pet.petBreed.length > 2;
        const petBreedWithoutStartBlanks = pet.petBreed.trimStart();
        const petNameIsValid = pet.petName.length > 5;

        if (!petBreedWithValidLength || !petBreedWithoutStartBlanks || !petNameIsValid){
            
            setError(true);

            if (!petBreedWithValidLength && !petBreedWithoutStartBlanks) {
                setErrorMessage("Por favor, chequea que la información ingresada sea correcta")
            } else if (!petNameIsValid) {
                    setErrorMessage("Por favor, chequea que la información ingresada sea correcta")
                }
            }
        }



        return;
    }

    setIsLogged(true)
    console.log("data: ", pet);
    
    
    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="petBreed"
                    onChange={(e) => handleChange(e, "petBreed")}
                />
                <input
                    type="text"
                    name="petName"
                    onChange={(e) => handleChange(e, "petName")}
                />
                <button type="submit">Enviar</button>
            </form>

            {error && errorMessage.includes("Por favor, chequea que la información ingresada sea correcta") && (
                <spam style={{ color: "red", fontSize: "0.5rem"}}>
                    {errorMessage}
                </spam>
            )}

            {isLogged && (
                <Card petBreed={pet.petBreed} petName={pet.petName} />
            )}

        </div>
    )
};

export default Form;