import * as React from "react";
import { MessagesProps } from "../../types";

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <div className="d-flex flex-column gap-2 align-items-start">
      {messages.map((message) => (
        <div
          key={message._id}
          className="message bg-secondary rounded-4 p-2 text-white"
        >
          <span>
            <b>{message.author}</b>
          </span>
          <small>{message.date}</small>
          <p className="m-0">{message.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Messages;
