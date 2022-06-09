import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "tomato" }}>こんにちは！</h1>
      <ColorfulMessage color="red">元気ですka?</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
