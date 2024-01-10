import React from "react";
import Storage from './hooks/UseStorage';
import "./App.css";

function App() {

  const [content, SetContent] = Storage('content', '')

  return(
    <>
        <input type="text" value={content} onChange={(e) => SetContent(e.target.value)}/>
    </>
  );
}

export default App;