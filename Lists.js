import { useState } from "react"

function Lists(){
    const [list,setLists]= useState([])
    const [count,setCount]= useState(1)
    
    function addItem(){
        const itemName= 'Item'+count;
        setLists((previousState) => { return [previousState,itemName]})
        setCount((previousState)=> { return previousState+1})
    }
    console.log('current state',list)

    return <>
        <h3>List</h3>
        <button onClick={addItem}>Add Item</button>
        <ul>{
            list.map((el,index) => <li key={index}>{el}</li> )
        }
        </ul>
    </>
}

export default Lists;