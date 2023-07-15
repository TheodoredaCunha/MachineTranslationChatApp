import React, { useState, useEffect } from 'react';
import LanguageSelector from './LanguageSelector';
import './Chat.css';


const Chat = ( {socket, userId} ) => {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [roomID, setRoomID] = useState('');
  const [username, setUsername] = useState();
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

    socket.on('joinRoomResponse', (data) => {
      setRoomID(data.room);
    }); 

    socket.on('updateUsername', (data) => {
      setUsername(data.username);
    }); 

    useEffect(() => {
    socket.on('messageResponse', (data) => {// accept message response
      setChatLog((prevChatLog) => [...prevChatLog, [data.text, data.userId, data.username]]);
    }); 

    return () => socket.off('messageResponse');
  }, [chatLog]);


  const handleSendMessage = () => {
    console.log(userId);
    if (message.trim() !== '') {
      socket.emit('message', { // emitting event to update message
        text: message,
        roomID: roomID,
        userId: userId,
        username: username
      });
      setMessage('');
    }
  };

  return (
    <div className="container">
      <h1 className='"Title'>Chat Translator</h1>
      <h2>{roomID}</h2>
      <div className="text-display">
        {chatLog.map((chat, index) => (
          <div key={index} className="message-box">
            
            <div className={chat[1] == userId ? 'sentMessageDiv':'receivedMessageDiv'}>
              <b>sender: {chat[2]}</b>
              <p className='messages'>{chat[0]}</p>
            </div>
            <br />
          </div>

        ))}
      </div>
      <div className="Text-input">
        <input type="text" value={message} onChange={handleInputChange} className='Text-box'/>
        <button onClick={handleSendMessage} className='Send'>Send</button>
      </div>
      <div className='Language-selector'>
      <LanguageSelector />
      </div>
    </div>
  );
};

export default Chat;