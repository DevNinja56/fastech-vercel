import { useEffect, useState } from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(
      <div className="wavy_msg">
        <img src="/images/gif-images/waving_hand.gif" />
        <p className="inital_msg">Hi! Lets Chat 😀</p>
      </div>
    ),

    createChatBotMessage(
      <p className="inital_msg">
        Please tell us about your business and how can we help you in it?
      </p>
    ),
  ],

  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
