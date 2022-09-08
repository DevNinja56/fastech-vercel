import { useEffect, useState } from "react";
import { createChatBotMessage } from "react-chatbot-kit";

// const MainFunction = () => {
// const [firstBtn, setFirstBtn] = useState("");
// console.log("btn message ==> ", firstBtn);
// };

const config = {
  initialMessages: [
    createChatBotMessage(
      <div className="wavy_msg">
        <img src="/images/gif-images/waving_hand.gif" />
        <p className="inital_msg">Hi! Lets Chat 😀</p>
      </div>
    ),

    createChatBotMessage(
      <>
        <p className="inital_msg">How can we help you today?</p>
        <button
          className="btn_1"
          // onClick={setFirstBtn("How can we help you today?")}
        >
          have a project or idea 🚀
        </button>
        <br />
        <button className="btn_2">want to hire a developer 💼</button>
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

export default config;
