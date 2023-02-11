import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from'axios'
import { useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import User from './components/User';
import './index.css';


function App(){
const [user, setUser] = useState([]);
const URL = 'https://reqres.in/api/users?page=1'

const fetchUser = async () => {
  const response = await axios.get(URL);
  setUser(response.data.data);
}

  return (
    <>
    <Navbar fetchUser={fetchUser} setUser={setUser}/>
    <Routes>
      <Route path='/' element={<Content />} />
      <Route path='/user' element={<User user={user} setUser={setUser} />} />
    </Routes>
    </>
  )
}

export default App