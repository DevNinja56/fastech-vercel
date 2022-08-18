import { useEffect, useState } from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);

  return (
    <div>
      <img src={imageUrl} alt="a dog" />
    </div>
  );
};

const config = {
  initialMessages: [
    createChatBotMessage(<img src="/images/gif-images/waving_hand.gif" />),
  ],
  widgets: [
    // {
    //   widgetName: "wlcomeImage",
    //   widgetFunc: (props) => (

    //   ),
    // },

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
