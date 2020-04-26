import React from "react";
import "./Chat.css";
import ChatMessages from "../ChatMessages/ChatMessages";
import ChatList from "../ChatList/ChatList";

import { testData } from "./testData"; // Test data

interface State {
  messages: string[];
  activeChat: string;
}

export default class Messenger extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      messages: ["Select a chat to start communication"],
      activeChat: "",
    };
    this.handleSetMessages = this.handleSetMessages.bind(this);
  }
  handleSetMessages(key: string) {
    return () => {
      const newMessages: string[] = [];
      testData.forEach((element) => {
        if (element.id === key) {
          for (let i = 0; i < element.messages.length; i += 1) {
            newMessages.push(
              `${new Date().toLocaleTimeString()}: ${element.messages[i]}`
            );
          }
        }
      });
      this.setState({ messages: newMessages, activeChat: key });
    };
  }

  render() {
    return (
      <section className="chat">
        <ChatList
          data={testData}
          activeChat={this.state.activeChat}
          handleSetMessages={this.handleSetMessages}
        />
        <ChatMessages {...this.state} />
      </section>
    );
  }
}
