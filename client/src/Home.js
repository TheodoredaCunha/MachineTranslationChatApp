import React, { useState } from 'react';
import { Link} from 'react-router-dom';

const Home = ({ socket, userId}) => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>User ID: {userId}</p>
      <div>
        choose room:
        <ul>
          <li onClick={() => socket.emit("joinRoom", { room: "Topic", id: userId})}><Link to="/chat">topic</Link></li>
          <li onClick={() => socket.emit("joinRoom", { room: "Topic2", id: userId})}><Link to="/chat">topic2</Link></li>
          <li onClick={() => socket.emit("joinRoom", { room: "Topic3", id: userId})}><Link to="/chat">topic3</Link></li>
        </ul>
        
        
        
      </div>
    </div>
  );
};

export default Home;