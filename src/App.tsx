import { Message } from "./types";
import * as React from "react";
import Messages from "./Components/Messages/Messages.tsx";
import { useEffect } from "react";
import MyMessage from "./Components/Messages/MyMessage.tsx";

function App() {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [datetime, setDateTime] = React.useState<string>("");
  const intervalId = React.useRef<number | null>(null);

  const getMessages = async () => {
    const url = `http://146.185.154.90:8000/messages?datetime=${datetime}`;

    try {
      const response = await fetch(url);
      const data: Message[] = await response.json();

      if (data.length > 0) {
        setMessages((messages) => [...messages, ...data]);
        const last = data[data.length - 1];
        setDateTime(last.date);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMessages();

    intervalId.current = window.setInterval(getMessages, 3000);

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [datetime]);

  return (
    <div className="container bg-light col-5 p-4">
      <div className="row mb-3">
        <Messages messages={messages} />
      </div>
      <div className="row"></div>
      <MyMessage getMessages={getMessages} />
    </div>
  );
}

export default App;
