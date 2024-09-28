import React from  "react";

class Cars extends React.Component{
    constructor(){
        super();
        this.state={color:"Purple", model:"ford"}
    }

    render(){
        return <>
        <h1>My Car color is {this.state.color} and model is {this.state.model}</h1>
        <button onClick={()=> {this.setState(previousState=> {return{...previousState,color:"blue"}}) }}>Change color</button>
        </>
    }

}
export default Cars;