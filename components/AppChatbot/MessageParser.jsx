import React, { useContext } from "react";
// import { GlobalInfo } from "./index";

const MessageParser = ({ children, actions, step, setStep, setShow }) => {
  // const { getName } = useContext(GlobalInfo);

  const parse = (message) => {
    if (message === "") {
    }
    if (step === 1 && message.includes("")) {
      actions.getInfo_1();
      setStep(2);
      console.log("chatbot message 1 ==>", message);
    }
    if (step === 2 && message.includes("")) {
      actions.getInfo_2();
      setStep(3);
      console.log("chatbot message 2 ==>", message);
    }
    if (step === 3 && message.includes("")) {
      actions.getInfo_3();
      setStep(4);
      console.log("chatbot message 3 ==>", message);
    }
    if (step === 4 && message.includes("")) {
      actions.finalMsg();
      setStep(5);
      console.log("chatbot message 4 ==>", message);

      setTimeout(() => setShow(false), 10000);
    }
  };

  return (
    <>
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            parse,
            actions: {},
          });
        })}
      </div>

      <style jsx>{`
        .react-chatbot-kit-chat-container {
          width: 100% !important;
        }
      `}</style>
    </>
  );
};

export default MessageParser;
