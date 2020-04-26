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

interface State {
  isActive: boolean;
}

export default class ChatPreview extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isActive: this.props.isActive,
    };
  }

  parseDate() {
    const date = new Date(this.props.lastMessageDate);
    return date.toLocaleString("ru", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  render() {
    const {
      chatIcon,
      chatName,
      companion,
      text,
      isActive,
      handleClick,
    } = this.props;

    return (
      <div
        className={`chat-preview ${isActive ? "chat-preview_active" : ""}`}
        onClick={handleClick(this.props.id)}
      >
        <img src={chatIcon} alt={chatName} className="chat-preview__img" />
        <div className="chat-preview__wrapper">
          <header className="chat-preview__header">
            <h2 className="chat-preview__title">{chatName}</h2>
            <time className="chat-preview__time">{this.parseDate()}</time>
          </header>
          <div className="chat-preview__content">
            <p className="chat-preview__companion">{companion}:&nbsp;</p>
            <p className="chat-preview__text">{text}</p>
          </div>
        </div>
      </div>
    );
  }
}
