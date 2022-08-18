import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes("")) {
      actions.handleHello();
    }
    if (message.includes("dog")) {
      actions.handleDog();
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
