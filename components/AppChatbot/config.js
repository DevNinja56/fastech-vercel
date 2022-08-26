import { useEffect, useState } from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState("");

  // useEffect(() => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setImageUrl(data.message);
  //     });
  // }, []);
  return (
    <div>
      {/* <img src={imageUrl} alt="a dog" /> */}
      {/* <h4>Thanks a lot! We will get back to you as soon as possible</h4> */}
    </div>
  );
};

const config = {
  initialMessages: [
    createChatBotMessage(
      <div className="wavy_msg">
        <img src="/images/gif-images/waving_hand.gif" />
        <p className="inital_msg">Hi! Lets Chat 😀</p>
      </div>
    ),
  ],
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
