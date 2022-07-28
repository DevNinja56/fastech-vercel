import Document, { Html, Head, Main, NextScript } from "next/document";
// import { useEffect } from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="zxx">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/images/favicon.png"></link>

          {/* <script>
            window.OneSignal = window.OneSignal || []; OneSignal.push(function(){" "}
            {OneSignal.init({
              appId: "af3b21ac-8b6b-4a83-9e9b-ea1b348a089f",
            })}
            )
          </script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
