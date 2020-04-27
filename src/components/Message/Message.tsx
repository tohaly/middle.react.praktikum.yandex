import React from "react";
import "./Message.css";

interface Props {
  message: string;
}

export const Message = ({ message }: Props) => {
  return <li className="message">{message}</li>;
};
