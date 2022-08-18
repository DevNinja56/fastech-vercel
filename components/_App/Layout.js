import React, { useEffect } from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import Socialicons from "./Socialicons";
import Skype from "./Skype";
import ChatBotModal from "../../components/ChatModal/chatModal";
// import ChatBot from "./ChatBot";

// import Preloader from './Preloader'

const notifyMe = () => {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "f8f5cd63-f5bb-4ad2-b786-5c015d9a8df8",
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin: true,
      });

      console.dir(window.OneSignal);
    });
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        window.OneSignal = window.OneSignal || [];
        OneSignal.push(function () {
          OneSignal.init({
            appId: "f8f5cd63-f5bb-4ad2-b786-5c015d9a8df8",
            notifyButton: {
              enable: true,
            },
            allowLocalhostAsSecureOrigin: true,
          });
        });

        console.dir(window.OneSignal);
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
};

const Layout = ({ children }) => {
  // Preloader
  // const [loader, setLoader] = React.useState(true);

  // React.useEffect(() => {
  //     setTimeout(() => setLoader(false), 1500);
  // }, [])

  useEffect(() => {
    notifyMe();
    window.OneSignal = window.OneSignal || [];

    OneSignal.push(function () {
      OneSignal.init({
        appId: "f8f5cd63-f5bb-4ad2-b786-5c015d9a8df8",
        notifyButton: {
          enable: false,
        },

        allowLocalhostAsSecureOrigin: true,
      });
    });

    window.OneSignal.getNotificationPermission();

    return () => {
      window.OneSignal = undefined;
    };
  }, []);

  return (
    <>
      <Head>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>The Fastech</title>
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async=""
        ></script>
        {/* <script>
          window.OneSignal = window.OneSignal || []; OneSignal.push(function(){" "}
          {OneSignal.init({
            appId: "f8f5cd63-f5bb-4ad2-b786-5c015d9a8df8",
            safari_web_id:
              "web.onesignal.auto.24b53800-ef1e-45ab-8e2c-057ebbb06239",
            notifyButton: {
              enable: true,
            },
          })}
          )
        </script> */}
      </Head>

      {children}

      {/* {loader ? <Preloader /> : null} */}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
      <Socialicons />
      <Skype />
      <ChatBotModal />

      {/* <ChatBot /> */}
    </>
  );
};

export default Layout;
