import React from "react";
import ChatBotModal from "../../components/ChatModal/chatModal";

const ChatBotScrolling = ({ scrollStep, delayIntime }) => {
  const [thePosition, setThePosition] = React.useState(false);
  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 850) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  //   const onScrollStep = () => {
  //     if (window.pageYOffset === 0) {
  //       clearInterval(timeoutRef.current);
  //     }
  //     window.scroll(0, window.pageYOffset - scrollStep);
  //   };

  //   const scrollToTop = () => {
  //     timeoutRef.current = setInterval(onScrollStep, delayIntime);
  //   };

  //   const renderGoTopIcon = () => {
  return (
    <>
      <div
        className={`whatsap_icon ${thePosition ? "active" : ""}`}
        // onClick={scrollToTop}
      >
        <ChatBotModal />
      </div>

      <style jsx>{`
        .links {
          color: var(--white-color);
        }
        .whatsap_icon {
          cursor: pointer;
          bottom: 700px;
          right: 100px;
          color: var(--white-color);
          background-color: var(--black-color);
          z-index: 1;
          width: 45px;
          text-align: center;
          height: 45px;
          line-height: 44px;
          opacity: 0;
          visibility: hidden;
          border-radius: 50%;
          font-size: 30px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          overflow: hidden;
          -webkit-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
        }

        .whatsap_icon.active {
          opacity: 1;
          visibility: visible;
          bottom: 105px;
        }
        .whatsap_icon:hover {
          background-color: var(--main-color);
          color: var(--white-color);
          -webkit-transition: var(--transition);
          transition: var(--transition);
          -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
          -webkit-transform: translateY(-5px);
          transform: translateY(-5px);
        }

        @media only screen and (max-width: 767px) {
          .whatsap_icon {
            width: 40px;
            height: 40px;
            line-height: 40px;
            font-size: 23px;
            bottom: 70px !important;
          }
        }
      `}</style>
    </>
  );
};

//   return <>{renderGoTopIcon()}</>;
// };

export default ChatBotScrolling;
