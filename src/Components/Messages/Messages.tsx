import * as React from 'react';
import { MessagesProps } from '../../types';

const Messages:React.FC<MessagesProps> = ({messages}) => {
  return (
    <div>
      {messages.map((message) => (
        <div key={message._id} className="message">
          <span><b>{message.author}</b></span>
          <small>{message.date}</small>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  )
}

export default Messages;