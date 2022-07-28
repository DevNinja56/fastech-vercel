import React from "react";

const Skype = ({ scrollStep, delayIntime }) => {
  const [thePosition, setThePosition] = React.useState(false);
  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
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
        className={`skype_icon ${thePosition ? "active" : ""}`}
        // onClick={scrollToTop}
      >
        <i className="fab fa-skype"></i>
      </div>

      <style jsx>{`
        .skype_icon {
          position: fixed;
          cursor: pointer;
          bottom: 300px;
          right: 20px;
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

        .skype_icon.active {
          opacity: 1;
          visibility: visible;
          bottom: 160px;
        }
        .skype_icon:hover {
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

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .skype_icon {
            width: 40px;
            height: 40px;
            line-height: 40px;
            font-size: 23px;
            bottom: 120px !important;
          }
        }
      `}</style>
    </>
  );
};

//   return <>{renderGoTopIcon()}</>;
// };

export default Skype;
