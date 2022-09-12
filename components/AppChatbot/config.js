import React, { useEffect } from "react";
import { createChatBotMessage } from "react-chatbot-kit";

// const click = () => {
//   console.log("click is ==>", click);
// };

// useEffect(() => {
// const allWithClass = document.getElementsByClassName("btn_1").click();
// console.log(allWithClass);
// }, []);

// document.getElementsByClassName("btn_1").click();

const config = {
  initialMessages: [
    createChatBotMessage(
      <div className="wavy_msg">
        <img src="/images/gif-images/waving_hand.gif" />
        <p className="initial_msg">Hi! Lets Chat 😀</p>
      </div>
    ),

    createChatBotMessage(
      <>
        <p className="initial_msg">How can we help you today?</p>
        <button
          className="btn_1"
          onClick={() => {
            const btnClick = document
              .getElementsByClassName("react-chatbot-kit-chat-btn-send")[0]
              ?.click();
            console.log(btnClick);
          }}
        >
          have a project or idea 🚀
        </button>
        <br />
        <button
          className="btn_2"
          onClick={() => {
            const btnClick = document
              .getElementsByClassName("react-chatbot-kit-chat-btn-send")[0]
              ?.click();
            console.log(btnClick);
          }}
        >
          want to hire a developer 💼
        </button>
      </>
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

export { config as default };
