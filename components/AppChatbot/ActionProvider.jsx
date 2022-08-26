import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage(
      "Please tell us about your business and how can we help you in it?"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const getInfo = () => {
    const botMessage = createChatBotMessage(
      "Please share you email address or phone number."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const finalMsg = () => {
    const botMessage = createChatBotMessage(
      "Thanks a lot! We will get back to you as soon as possible."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleHello, finalMsg, getInfo },
        });
      })}
    </div>
  );
};

export default ActionProvider;
