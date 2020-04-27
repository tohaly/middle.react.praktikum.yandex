import React from "react";
import "./ChatMessage.css";

interface Props {
  message: string;
}

const Message = ({ message }: Props) => {
  return <li className="message">{message}</li>;
};

export default Message;
