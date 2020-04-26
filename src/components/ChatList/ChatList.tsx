import React from "react";
import ChatPreview from "../ChatPreview/ChatPreview";
import "./ChatList.css";

interface PrevProps {
  id: string;
  chatName: string;
  companion: string;
  text: string;
  lastMessageDate: number;
  chatIcon: string;
  messages: string[];
}

interface Props {
  data: PrevProps[];
  activeChat: string;
  handleSetMessages: (key: string) => void;
}

export default class ChatList extends React.Component<Props> {
  getSortedChats(): PrevProps[] {
    return [...this.props.data].sort((a, b) => {
      return b.lastMessageDate - a.lastMessageDate;
    });
  }

  render() {
    return (
      <div className="chat-list">
        {this.getSortedChats().map((item) => {
          let activate: boolean = false;
          if (this.props.activeChat === item.id) {
            activate = true;
          }
          return (
            <ChatPreview
              key={item.id}
              handleClick={this.props.handleSetMessages}
              isActive={activate}
              {...item}
            />
          );
        })}
      </div>
    );
  }
}
