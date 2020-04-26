import uniqid from "uniqid";
import men1 from "../../images/example-user-photo/men-1.jpg";
import men2 from "../../images/example-user-photo/men-2.jpg";

import girl1 from "../../images/example-user-photo/girl-1.jpg";
import girl2 from "../../images/example-user-photo/girl-2.jpg";
import girl3 from "../../images/example-user-photo/girl-3.jpg";
import girl4 from "../../images/example-user-photo/girl-4.jpg";

import yp from "../../images/example-user-photo/yp.jpg";
import corparate from "../../images/example-user-photo/corparate.jpg";

interface Data {
  id: string;
  chatName: string;
  companion: string;
  text: string;
  lastMessageDate: number;
  chatIcon: string;
  messages: string[];
}

export const testData: Data[] = [
  {
    id: uniqid("chat-prev"),
    chatName: "Billy Fuller",
    companion: "Billy Fuller",
    text:
      "Am wound worth water he linen at vexed.. Made neat an on be gave show snug tore. Decisively advantages nor e",
    lastMessageDate: 707894000000,
    chatIcon: men1,
    messages: [
      "Hello!",
      "Whats up?",
      "im fine, and you?",
      "I found a new job",
      "Great, congratulations",
      "If you leave now, you get nothing.",
      "Are you taking his side against me?",
      "Darling, it's beautiful, thank you!",
      "Do you think he crashed the car on purpose?",
      "Why didn't he come and talk to me himself?",
      "Whats up?",
      "im fine, and you?",
      "I found a new job",
      "Great, congratulations",
    ],
  },
  {
    id: uniqid("chat-prev"),
    chatName: "Corporate",
    companion: "Amy Wallace",
    text:
      "As mr started arrival subject by believe. Their saved linen downs tears son add music. He in sportsman ho",
    lastMessageDate: 13057600000,
    chatIcon: corparate,
    messages: [
      "You embarrassed me this evening.",
      "You must be mad, coming here like this.",
      "I want to be there when you get what's coming to you.",
      "I hope that what I've said hasn't hurt you too much.",
      "I WILL find out who killed my husband, with or without your help.",
      "Whats up?",
      "im fine, and you?",
      "I found a new job",
      "Great, congratulations",
      "You did a bad thing for a good reason.",
      "What do you remember about your mother?",
      "If you leave now, you get nothing.",
    ],
  },
  {
    id: uniqid("chat-prev"),
    chatName: "Warren Vargas",
    companion: "Warren Vargas",
    text:
      "Latter remark hunted enough vulgar say man. Now summer who day looked our behind moment coming. To sure calm much most long me mean. P",
    lastMessageDate: 763660600000,
    chatIcon: men2,
    messages: [
      "No! I'm tired of doing what you say.",
      "You embarrassed me this evening.",
      "Why didn't he come and talk to me himself?",
      "Sorry, its just that I get very nervous when someone else is driving.",
      "She doesn't understand you like I do.",
      "What do you mean, he's escaped?",
      "Whats up?",
      "im fine, and you?",
      "I found a new job",
      "Great, congratulations",
      "She's old and it's about time she died.",
      "Just give me my cut of the money and I'll be out of here.",
    ],
  },
  {
    id: uniqid("chat-prev"),
    chatName: "Beatrice Sutton",
    companion: "Beatrice Sutton",
    text:
      "Advantages entreaties mr he apartments do. Do play they miss give so up. Called though excuse length ye ne",
    lastMessageDate: 1108399800000,
    chatIcon: girl1,
    messages: [
      "You embarrassed me this evening.",
      "You must be mad, coming here like this.",
      "I want to be there when you get what's coming to you.",
      "Whats up?",
      "im fine, and you?",
      "I found a new job",
      "Great, congratulations",
      "I hope that what I've said hasn't hurt you too much.",
      "I WILL find out who killed my husband, with or without your help.",
      "You did a bad thing for a good reason.",
      "What do you remember about your mother?",
      "If you leave now, you get nothing.",
    ],
  },
  {
    id: uniqid("chat-prev"),
    chatName: "Tonya Castro",
    companion: "Tonya Castro",
    text:
      "Advantages entreaties mr he apartments do. Do play they miss give so up. Called though excuse length ye ne",
    lastMessageDate: 1808396800000,
    chatIcon: girl2,
    messages: [
      "No! I'm tired of doing what you say.",
      "You embarrassed me this evening.",
      "Why didn't he come and talk to me himself?",
      "Sorry, its just that I get very nervous when someone else is driving.",
      "She doesn't understand you like I do.",
      "Whats up?",
      "im fine, and you?",
      "I found a new job",
      "Great, congratulations",
      "What do you mean, he's escaped?",
      "She's old and it's about time she died.",
      "Just give me my cut of the money and I'll be out of here.",
    ],
  },
  {
    id: uniqid("chat-prev"),
    chatName: "Tina Weaver",
    companion: "Tina Weaver",
    text:
      "Advantages entreaties mr he apartments do. Do play they miss give so up. Called though excuse length ye ne",
    lastMessageDate: 1858396800000,
    chatIcon: girl3,
    messages: [
      "You embarrassed me this evening.",
      "You must be mad, coming here like this.",
      "I want to be there when you get what's coming to you.",
      "I hope that what I've said hasn't hurt you too much.",
      "I WILL find out who killed my husband, with or without your help.",
      "You did a bad thing for a good reason.",
      "What do you remember about your mother?",
      "If you leave now, you get nothing.",
      "Whats up?",
      "im fine, and you?",
      "I found a new job",
      "Great, congratulations",
    ],
  },
  {
    id: uniqid("chat-prev"),
    chatName: "Letitia Jones",
    companion: "Letitia Jones",
    text:
      "Advantages entreaties mr he apartments do. Do play they miss give so up. Called though excuse length ye ne",
    lastMessageDate: 1246396800000,
    chatIcon: girl4,
    messages: [
      "Hello!",
      "Whats up?",
      "im fine, and you?",
      "I found a new job",
      "Great, congratulations",
    ],
  },
  {
    id: uniqid("chat-prev"),
    chatName: "YP",
    companion: "Letitia Jones",
    text:
      "Advantages entreaties mr he apartments do. Do play they miss give so up. Called though excuse length ye ne",
    lastMessageDate: 1408396800000,
    chatIcon: yp,
    messages: [
      "Hello!",
      "Whats up?",
      "im fine, and you?",
      "I found a new job",
      "Great, congratulations",
    ],
  },
];
