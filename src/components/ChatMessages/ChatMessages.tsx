import React from "react";
import Message from "../ChatMessage/ChatMessage";
import "./ChatMessages.css";

interface Props {
  messages: string[];
}

const ChatMessage = ({ messages }: Props) => {
  return (
    <ul className="chat-messages">
      {messages.map((message, index) => {
        return <Message key={index} message={message} />; // В таком случае, можно так выйти из ситуации) Либо как мне кажется, у каждого сообщения должен быть свой _id
      })}
    </ul>
  );
};

export default ChatMessage;
