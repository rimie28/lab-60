import { useState } from 'react';
import * as React from 'react';
import { MyMessageProps } from '../../types';

const MyMessage:React.FC<MyMessageProps> = ({getMessages}) => {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    const url = 'http://146.185.154.90:8000/messages'

    const data = new URLSearchParams();

    data.set('message', message);
    data.set('author', author);

    try {
      const response = await fetch(url, {
        method: 'post',
        body: data,
      });
      setMessage('');
      getMessages()
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write your name:"
        value={author}
        onChange={e => setAuthor(e.target.value)}/>
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}/>
      <button
        type="submit"
      >Send
      </button>
    </form>
  )
}

export default MyMessage;