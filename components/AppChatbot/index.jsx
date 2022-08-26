import React, { useState } from "react";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

const AppChatbot = () => {
  const [step, setStep] = useState(1);

  const MessageParserWithState = (props) => {
    return <MessageParser step={step} setStep={setStep} {...props} />;
  };

  return (
    <>
      <div>
        <Chatbot
          config={config}
          messageParser={MessageParserWithState}
          actionProvider={ActionProvider}
        />
      </div>

      <style jsx>{`
        .chatbot_img {
          max-width: 100%;
          height: 50px;
          width: 50px;
        }
        .chatbot_btn {
          border: none;
          background-color: transparent;
        }
      `}</style>
    </>
  );
};

export default AppChatbot;
