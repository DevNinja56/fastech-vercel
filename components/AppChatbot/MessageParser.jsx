import React from "react";

const MessageParser = ({ children, actions, step, setStep }) => {
  const parse = (message) => {
    if (step === 1 && message.includes("")) {
      actions.handleHello();
      setStep(2);
    }
    if (step === 2 && message.includes("")) {
      actions.getInfo();
      setStep(3);
    }
    if (step === 3 && message.includes("")) {
      actions.finalMsg();
      setStep(4);
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
