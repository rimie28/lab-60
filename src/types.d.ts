export interface Message {
  _id: string;
  message: string;
  author: string;
  date: string;
}

export interface MessagesProps {
  messages: Message[];
}