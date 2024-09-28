import {useState} from "react";

function FavColor(){
    //let color="Purple";
    const [color,setColor] =useState('Purple')

    return <>
        <h1>My Favorite Color is {color}</h1>
        <button onClick={()=>{setColor('Yellow')}}>Change color</button>
    </>

}

export default FavColor;