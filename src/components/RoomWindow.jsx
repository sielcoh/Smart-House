import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddPorducts from './AddPorducts'


export default function RoomWindow(props) {


  const [flag , setFlag] = useState(true)

  //A flag that takes care of appearance and beauty
  const show = () =>{
    if(flag === false){
      return <AddPorducts room={props.room} addNewProduct={props.addNewProduct} products={props.products} index={props.index} setFlag={setFlag} />
    }else{
      return <button className="buttonproduct btn btn-dark" onClick={()=>setFlag(!flag)}>Add a porduct</button>
    }
  }
  
  
  return (
    <div className='roomwindow'>
        <h2>Room Name:</h2>
        <h3 className='display-6 fw-bold' style={{color:props.roomColor}}> {props.roomName}</h3>
        <h2>Room Type:</h2> 
        <h3 className='display-6 fw-bold' style={{color:props.roomColor}}>{props.room}</h3>
        {show()}
        <br />
        <br />
        <div className='container'>
          {props.products.map((val , indexOfProducts)=>{
          let device = val.status ? '#72A0C1' : '#fd5c63';
          return  <div className='product-div' key={indexOfProducts} style={{backgroundColor:device}}
          >
            {val.device}
            <button className='btnonof btn btn-dark' onClick={()=>{props.changeRoomStatus(props.index , indexOfProducts)}}>on/off</button>
          </div>
        })}
        </div>
        <br />

        <Link to={'/'}><button className="btn btn-dark">Back To Home Page</button></Link>
    </div>
  )
}
