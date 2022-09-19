import React, { useState, createContext } from "react";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { useEffect } from "react";

const AppChatbot = ({ setShow }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  console.log("state value is ===>", name, phone, email);

  useEffect(() => {
    let chatBotData = {
      Name: name,
      Phone_number: phone,
      Email: email,
    };
    console.log("api data ==>", chatBotData);

    fetch("http://localhost:3000/api/chatBot/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chatBotData),
    }).then((res) => {
      if (res.status === 200) {
        console.log("api post success");
      } else {
        console.log("api post failed");
      }
    });
  });

  const MessageParserWithState = (props) => {
    return (
      <>
        <MessageParser
          step={step}
          setStep={setStep}
          setShow={setShow}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          // btnProp={handleSubmit()}
          {...props}
        />
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
