import { useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

function App() {
  const [chatID, setChatID] = useState(0);
  console.log(chatID);
  return (
    <div className="app">
      <div className="app__greenColorInBackground"></div>
      <div className="app__body">
        <Sidebar setChatID={setChatID} />
        <Chat chatID={chatID} />
      </div>
    </div>
  );
}

export default App;
