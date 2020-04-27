import React from "react";
import "./ChatPreview.css";

interface Props {
  id: string;
  chatName: string;
  companion: string;
  text: string;
  lastMessageDate: number;
  chatIcon: string;
  messages: string[];
  handleClick: (key: string) => any;
  isActive: boolean;
}

const parseDate = (date: number) => {
  return new Date(date).toLocaleString("ru", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const ChatPreview = (props: Props) => {
  const {
    chatIcon,
    chatName,
    companion,
    text,
    isActive,
    handleClick,
    id,
    lastMessageDate,
  } = props;

  return (
    <div
      className={`chat-preview ${isActive ? "chat-preview_active" : ""}`}
      onClick={handleClick(id)}
    >
      <img src={chatIcon} alt={chatName} className="chat-preview__img" />
      <div className="chat-preview__wrapper">
        <header className="chat-preview__header">
          <h2 className="chat-preview__title">{chatName}</h2>
          <time className="chat-preview__time">
            {parseDate(lastMessageDate)}
          </time>
        </header>
        <div className="chat-preview__content">
          <p className="chat-preview__companion">{companion}:&nbsp;</p>
          <p className="chat-preview__text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatPreview;
