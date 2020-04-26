import React from "react";
import "./ChatMessage.css";

interface Props {
  message: string;
}

const Message = (props: Props) => {
  return <li className="message">{props.message}</li>;
};

export default Message;
