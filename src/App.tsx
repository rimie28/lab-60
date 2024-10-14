import { Message } from './types';
import * as React from 'react';
import Messages from './Components/Messages/Messages.tsx';


function App() {
  const [messages, setMessages] = React.useState<Message[]>([]);

  return (
    <div className="container">
      <div className="row">
        <Messages messages={messages} />
      </div>
      <div className="row">
      </div>
    </div>
  )
}

export default App
