import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Chat from './Chat';
import Translator from './Translator';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:4000');
function App() {
  const [userID, setUserID] = useState('');
  socket.on('UpdateUserInfo', (userInfo) => {
    console.log("hello from App.js");
    setUserID(userInfo.id);
  });
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} userId={userID} />}></Route>
          <Route path="/chat" element={<Chat socket={socket} userId={userID} />}></Route>
          <Route path="/translate" element={<Translator />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;