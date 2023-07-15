import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './home.css';

const Home = ({ socket, userId}) => {
  const [username, setUsername] = useState('');
  return (
    <div className="home-container">
      <h1 className="welcome-heading">Welcome</h1>
      <p className="user-id">User ID: {userId}</p>
      <input type="text" value={username} onChange={(event) => {setUsername(event.target.value)}} className="Username-input" placeholder="Username..."></input>
      <div className="room-selection">
        <p className="choose-room">choose room:</p>
        <ul className="room-list">
          <li onClick={() => socket.emit("joinRoom", { room: "Topic", id: userId, username: username})}>
            <Link to="/chat" className="room-link">
              <img src={require('./1.jpg')} alt="Topic" className="room-image" />
              <span className="room-name">Topic</span>
            </Link>
          </li>

          <li onClick={() => socket.emit("joinRoom", { room: "Topic2", id: userId, username: username})}>
            <Link to="/chat" className="room-link">
              <img src={require('./2.jpg')} alt="Topic 2" className="room-image" />
              <span className="room-name">Topic 2</span>
            </Link>
          </li>
          <li onClick={() => socket.emit("joinRoom", { room: "Topic3", id: userId, username: username})}>
            <Link to="/chat" className="room-link">
              <img src={require('./3.jpg')} alt="Topic 3" className="room-image" />
              <span className="room-name">Topic 3</span>
            </Link>
          </li>
        </ul>
        
        
        
      </div>
    </div>
  );
};

export default Home;