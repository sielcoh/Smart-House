import { useState } from 'react';
import {HashRouter as BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import CreateRoom from './components/CreateRoom';
import HomePage from './components/HomePage';
import Room from './components/Room';
import RoomWindow from './components/RoomWindow';

function App() {

  const [roomArr, setRoomArr ] = useState([]) 

  //Adding a new product to the room
  const addNewProduct =(index, type)=>{
    const copyRoom =  [...roomArr]
    const product = {status: false , device: type }
    copyRoom[index].products.push(product)
    setRoomArr(copyRoom)
  }
  //Changes the state of the product!
  const changeRoomStatus =(indexRoom , indexProducts)=>{
    roomArr[indexRoom].products[indexProducts].status = !roomArr[indexRoom].products[indexProducts].status
    setRoomArr([...roomArr])
  }

  //Render paths by room name
  return (
    <div className="App">
    <h1 className='display-6 fw-bold'>Smart House</h1>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage roomArr={roomArr} room={<Room/>} />}/> 
        <Route path='CreateRoom' element={<CreateRoom setRoomArr={setRoomArr} roomArr={roomArr} />}/>
        {roomArr.map((val,index) =>{
          return(
          <Route key={index} path={`roomWindow/${val.roomName}`}
          element={<RoomWindow index={index} room={val.room} roomName={val.roomName} roomColor={val.roomColor} products={val.products} addNewProduct={addNewProduct} changeRoomStatus={changeRoomStatus}/>}/>
        )})}
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
