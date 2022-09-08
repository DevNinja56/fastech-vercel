import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const btnMessage = () => {
    const botMessage = createChatBotMessage(
      "Awesome! Let's get the basics out of the way quick!"
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
          actions: { btnMessage, finalMsg, getInfo },
        });
      })}
    </div>
  );
};

export default ActionProvider;
