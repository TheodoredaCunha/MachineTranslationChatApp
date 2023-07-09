import React, { useState, useEffect } from 'react';
import LanguageSelector from './LanguageSelector';
import './Chat.css';


const Chat = ( {socket} ) => {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [roomID, setRoomID] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

    socket.on('joinRoomResponse', (data) => {
      setRoomID(data.room)
    }); 

    useEffect(() => {
    socket.on('messageResponse', (data) => {// accept message response
      setChatLog((prevChatLog) => [...prevChatLog, data]);
    }); 

    return () => socket.off('messageResponse');
  }, [chatLog]);


  const handleSendMessage = () => {
    if (message.trim() !== '') {
      socket.emit('message', { // emitting event to update message
        text: message,
        roomID: roomID
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
          <p key={index} className='messages'>{chat}</p>
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