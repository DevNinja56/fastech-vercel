import React, { useState } from "react";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

const AppChatbot = () => {
  // const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
        {/* {isOpen && (
          
        )}

        <button
          className="chatbot_btn"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <img
            src="images/chatbot/chat.png"
            className="chatbot_img"
            alt="chatbot"
          />
        </button> */}
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
