import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="modal"></div>
        </body>
      </Html>
    );
  }
}

export default MainDocument;
