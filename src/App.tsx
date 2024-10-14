import { Message } from './types';
import * as React from 'react';
import Messages from './Components/Messages/Messages.tsx';
import { useEffect } from 'react';
import MyMessage from './Components/Messages/MyMessage.tsx';


function App() {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [datetime, setDateTime] = React.useState<string>('');

  const getMessages = async () => {
    const url = `http://146.185.154.90:8000/messages?datetime=${datetime}`;

    try {
      const response = await fetch(url);
      const data:Message[] = await response.json();

      setMessages(messages => [...messages, ...data]);
    } catch (error) {
      console.error(error);
    }

  }


  return (
    <div className="container">
      <div className="row">
        <Messages messages={messages} />
      </div>
      <div className="row">
      </div>
      <MyMessage getMessages={getMessages}/>
    </div>
  )
}

export default App
