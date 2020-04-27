import React from "react";
import "./Chat.css";
import ChatMessages from "../ChatMessages/ChatMessages";
import ChatList from "../ChatList/ChatList";

import { testData } from "./testData"; // Test data

interface State {
  messages: string[];
  activeChat: string;
}

export class Chat extends React.Component {
  readonly state: State = {
    messages: ["Select a chat to start communication"],
    activeChat: "",
  };

  handleSetMessages = (key: string) => {
    return () => {
      let newMessages: any;
      testData.forEach((element) => {
        // Почитал статью, очень полезно. Я не стал улучшать, но мне интересно, правильно ли я понял данные в таком случае выглядели бы следующим образом const testData = {'id39129312': {someData1}, id39524352': {someData2}, ... , id31233312': {someData100}}
        if (element.id === key) {
          newMessages = element.messages.map((message) => {
            return `${new Date().toLocaleTimeString()}: ${message}`;
          });
        }
      });
      this.setState({ messages: newMessages, activeChat: key });
    };
  };

  render() {
    return (
      <section className="chat">
        <ChatList
          data={testData}
          activeChat={this.state.activeChat}
          handleSetMessages={this.handleSetMessages}
        />
        <ChatMessages messages={this.state.messages} />
      </section>
    );
  }
}
