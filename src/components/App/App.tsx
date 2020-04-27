import React from "react";
import "./App.css";
import { Chat } from "../Chat/Chat";

export const App = () => {
  return (
    <div className="app">
      <h1 className="title">Simple Chat Maquette</h1>
      <Chat />
    </div>
  );
};
