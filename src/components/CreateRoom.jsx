import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateRoom(props) {
    const nav = useNavigate()
    const [room , setRoom] = useState('Kitchen')
    const [roomName , setRoomName] = useState('')
    const [roomColor , setRoomColor] = useState('');

    
    const addInfoToRoomArr =()=>{
        //If the name is greater than ten reset characters of the states
        if(roomName.length > 10){
            alert('Room Name Long then 10 charecters!')
            setRoomName("")
            setRoom('')
            setRoomColor('')
        }
        //If the name is empty reset the states
        else if(roomName.length === 0 ){
            alert('Room Name is empty, please enter Room Name')
            setRoomName("")
            setRoom('')
            setRoomColor('')
        }
        //Otherwise, add a room, alert and return to the home page
        else{
        let temp ={
            room : room,
            roomName: roomName,
            roomColor: roomColor,
            products: []
        }
        props.setRoomArr([...props.roomArr , temp] ) 
        alert(`
        Hello ${roomName}!.
        Your room has been created.
        You can enter it and add products!
        `)
        nav('/')
    }}

    
  return (
    <div>
        <div className='chooseroom rounded-3'> 

        <h2>Room Name:</h2>
        <input type='text' className="form-control" placeholder='Room Name' onChange={(e)=>{setRoomName(e.target.value)}}/>

        <h2>Choose Room</h2>
        <select className="form-select text-center" onChange={(e)=>{setRoom(e.target.value)}} >
            <option value="Kitchen">Kitchen</option>
            <option value="Living Room">Living Room</option>
            <option value="Toilet">Toilet</option>
        </select>

        <h2>Choose Room Color:</h2>
        <input type='color' className='from-control-color' onChange={(e)=>{setRoomColor(e.target.value)}}/> <br/>
        <button className="btn btn-dark" role="button" onClick={()=>{addInfoToRoomArr()}}>Creat Room</button>

        </div>
    </div>
  )
}
