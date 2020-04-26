import React from "react";
import Message from "../ChatMessage/ChatMessage";
import uniqid from "uniqid";
import "./ChatMessages.css";

interface Props {
  messages: string[];
}

const ChatMessage = (props: Props) => {
  return (
    <ul className="chat-messages">
      {props.messages.map((message) => {
        return <Message key={uniqid("message-")} message={message} />;
      })}
    </ul>
  );
};

export default ChatMessage;
