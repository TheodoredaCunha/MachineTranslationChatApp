import React, { useState } from 'react';
import { Link} from 'react-router-dom';

const Home = ({ socket }) => {
  const [userID, setUserID] = useState('');
  socket.on('UpdateUserInfo', (userInfo) => {
    console.log("hello");
    setUserID(userInfo.id);
  });
  return (
    <div>
      <h1>Welcome</h1>
      <p>User ID: {userID}</p>
      <div>
        choose room:
        <ul>
          <li onClick={() => socket.emit("joinRoom", { room: "Topic", id: userID}  )}><Link to="/chat">topic</Link></li>
          <li onClick={() => socket.emit("joinRoom", { room: "Topic2", id: userID})}><Link to="/chat">topic2</Link></li>
          <li onClick={() => socket.emit("joinRoom", { room: "Topic3", id: userID})}><Link to="/chat">topic3</Link></li>
        </ul>
        
        
        
      </div>
    </div>
  );
};

export default Home;