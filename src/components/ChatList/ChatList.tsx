import React from "react";
import { ChatPreview } from "../ChatPreview/ChatPreview";
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

const getSortedChats = (data: PrevProps[]): PrevProps[] => {
  return data.sort((a, b) => {
    return b.lastMessageDate - a.lastMessageDate;
  });
};

export const ChatList = (props: Props) => {
  return (
    <div className="chat-list">
      {getSortedChats(props.data).map((item) => {
        return (
          <ChatPreview
            key={item.id}
            handleClick={props.handleSetMessages}
            isActive={props.activeChat === item.id ? true : false}
            {...item}
          />
        );
      })}
    </div>
  );
};
