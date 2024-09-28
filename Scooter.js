import { useState } from "react";

function Scooter(){
    //const [color,setColor] =useState("Purple")
    //const [brand,setBrrand] =useState("Honda")
    //const [model,setModel] =useState("Activa 7G")
    //const [year,setYear] =useState("2020")
    const[scooter,setScooter]= useState(
        {   
            color:"Purple",
            brand:"Honda",
            model:"Activa 7G",
            year:"2020"
        }
    );

    function updateColor(){
        setScooter(previousState =>{
            return{...previousState,color:"Blue"}
        })
    }

    console.log("Current State",scooter)

    return <>
        <h1>My Scooter</h1>
        <h2>Color: {scooter.color}</h2>
        <h2>Brand: {scooter.brand}</h2>
        <h2>Model: {scooter.model}</h2>
        <h2>Year: {scooter.year}</h2>
        <button onClick={updateColor}>Change color</button>
    </>

}
export default Scooter;