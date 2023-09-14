import React, { useState } from 'react'

export default function AddPorducts(props) {

const [productChoosen , setProductChoosen] = useState('Air-Conditioner')

//Conditions for adding products to the room
const checkTheProducts =()=>{
        const products = props.products;
        if(productChoosen === 'Stereo System' && products.filter(val => val.device === 'Stereo System').length > 0 ){
            alert ('Only One Stereo System each room')
        }else if(productChoosen === 'Electric Heater' && props.room !== 'Toilet'){
            alert ('Electric Heater allowed only in Toilet')
        }else if( products.length === 5){
            alert ('only 5 products in 1 room')
        }else{
            props.addNewProduct(props.index , productChoosen)
        }
        props.setFlag(true)
    }
return (
    <div >
        <h2>Choose a Product:</h2>
        <div className='box'>
        <select className='form-select text-center' onChange={(e)=>{setProductChoosen(e.target.value)}}>
        <option value="Air-Conditioner">Air-Conditioner</option>
        <option value="Electric Heater">Electric Heater</option>
        <option value="Stereo System">Stereo System</option>
        <option value="Lamp">Lamp</option>
        </select>
        </div>
        <br />
        <button className="btn btn-dark" onClick={()=>{checkTheProducts()}}>Add Product To The Room</button>
    </div>
)
}
