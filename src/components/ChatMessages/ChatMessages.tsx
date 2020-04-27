import React from "react";
import { Message } from "../Message/Message";
import "./ChatMessages.css";

interface Props {
  messages: string[];
}

export const ChatMessages = ({ messages }: Props) => {
  return (
    <ul className="chat-messages">
      {messages.map((message, index) => {
        return <Message key={index} message={message} />; // В таком случае, можно так выйти из ситуации) Либо, как мне кажется, у каждого сообщения должен быть свой _id
      })}
    </ul>
  );
};
