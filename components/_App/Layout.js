import React, { useEffect } from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import Socialicons from "./Socialicons";
import Skype from "./Skype";
import ChatBotModal from "../../components/ChatModal/chatModal";

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
};

const Layout = ({ children }) => {
  useEffect(() => {
    if (window.OneSignal && window.OneSignal.getNotificationPermission) {
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
    }

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

        <title>Ragzon | Software Development and Consulting Company</title>
        <meta
          name="description"
          content="ragzon provides software development and consultation services to startups and SMEs. We help tech companies scale their engineering capacity. Get in touch today!"
        />
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async=""
        ></script>
      </Head>

      {children}

      {/* {loader ? <Preloader /> : null} */}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
      <Socialicons />
      <Skype />
      <ChatBotModal />
    </>
  );
};

export default Layout;
