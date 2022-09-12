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

  const getInfo_1 = () => {
    const botMessage = createChatBotMessage(
      <>
        <p className="unbold_worlds">
          Awesome! Let's get the basics out of the way quick!
        </p>
        <p className="bold_words">What's your Name?</p>
      </>
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const getInfo_2 = () => {
    const botMessage = createChatBotMessage(
      <>
        <p className="bold_words_2">What's your Phone number?</p>
        <p className="unbold_worlds_2">Required to contact you</p>
      </>
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const getInfo_3 = () => {
    const botMessage = createChatBotMessage(
      <>
        <p className="bold_words_2">What is your email address?</p>
        <p className="unbold_worlds_2">Required to contact you</p>
      </>
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const finalMsg = () => {
    const botMessage = createChatBotMessage(
      <>
        <p>
          It's done 😀 Just hang in there! We are on our way to help you out.
        </p>
        <p>
          One of our team member will call you within 24 to 48 hours. (Yes we
          are that quick).
        </p>
      </>
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
          actions: { btnMessage, finalMsg, getInfo_1, getInfo_2, getInfo_3 },
        });
      })}
    </div>
  );
};

export default ActionProvider;
