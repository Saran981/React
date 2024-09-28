import Car from './Car'
import Apple from './Apple';

function Saran(){
  const isDoorOpened =false;
    //const brand = 'Ford';
    const carInfo={brand:"ferrar",color:"Black"}
    //const carInfo={};
    const appleInfo={type:"Fuji",color:"Red"};
    //list items for react and key is render 
  const carList=[
    {brand:"BMW",color:"Red"},
    {brand:"Ford",color:"Yellow"},
    {brand:"Tesla",color:"Purple"}
  ];

  const numberList=[
    1,2,3,3,4,5,5,6
  ];

  const showCarInfo=carInfo.brand !==undefined && carInfo.color !== undefined
    return (
      <>
        <h1>Who lives inside my Saran?</h1>
        {/*<Car brand={brand} color="black" />*/}
        { showCarInfo && <Car carInfo={carInfo}/> }
        <Apple appleInfo={appleInfo}/>
        {isDoorOpened?<h2>Saran door is open</h2>:<h2>Saran door is closed</h2>}
        <ul>
          { carList.map((carInfo)=> <li key={carInfo.brand}><Car carInfo={carInfo} /></li>)}
        </ul>

        <ul>
          { numberList.map((e,index)=> <p key={index}>{e}</p>)}
        </ul>
      </>
    )
  }
  
export default Saran;