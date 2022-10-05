import React, { useContext, useState } from "react";

const MessageParser = ({
  children,
  actions,
  step,
  setStep,
  setShow,
  setName,
  setPhone,
  setEmail,
  // btnProp,
}) => {
  // const DisableHandle = () => {
  //   document.getElementsByName("react-chatbot-kit-chat-btn-send")[0]?.click().event.currentTarget.disabled = true;
  // };

  const parse = (message) => {
    // if (message === "") {
    //   DisableHandle();
    // }

    if (step === 1 && message.includes("")) {
      actions.getInfo_1();
      setStep(2);
    }

    if (step === 2 && message.includes("")) {
      actions.getInfo_2();
      setStep(3);
      setName(message);
    }

    if (step === 3 && message.includes("")) {
      actions.getInfo_3();
      setStep(4);
      setPhone(message);
    }

    if (step === 4 && message.includes("")) {
      actions.finalMsg();
      setStep(5);
      setEmail(message);
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
