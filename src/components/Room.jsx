import React from 'react'
import { Link } from 'react-router-dom'

// The rooms shown on the home page
export default function Room(props) {

  return (
    <div className='room-container rounded-3' style={{backgroundColor:props.roomColor}}>

    <h1>{props.roomName}</h1>
    <Link 
    className='Link' to={`roomWindow/${props.roomName}`}><button className='btn btn-dark'>Enter</button>
    </Link>     

    </div>
  )
}
