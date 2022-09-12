import React, { useState, createContext } from "react";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

// export const GlobalInfo = createContext();

const AppChatbot = ({ setShow }) => {
  const [step, setStep] = useState(1);
  // const [name, setName] = useState("");

  // const hndleClick = () => {
  //   setName("Abdul");
  // };

  const MessageParserWithState = (props) => {
    return (
      <>
        {/* <button onClick={hndleClick()}>Button</button> */}

        {/* <GlobalInfo.Provider> */}
        <MessageParser
          step={step}
          setStep={setStep}
          setShow={setShow}
          {...props}
        />
        {/* </GlobalInfo.Provider> */}
      </>
    );
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
