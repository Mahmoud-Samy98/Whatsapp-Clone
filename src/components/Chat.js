import React, { useState } from "react";
import "./Chat.css";

import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import Message from "./Message";

function Chat() {
  // const reciever = "reciever";
  const [messages, setMessages] = useState([
    { id: 0, messageContent: "this is a message" },
  ]);
  const [current, setCurrent] = useState("");

  const updateMessage = (e) => {
    setCurrent(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    messages.push({
      id: messages.length,
      messageContent: current,
    });
    setCurrent("");
    console.log(messages);
  };

  const messagesList = messages.map((message) => {
    return <Message content={message.messageContent} key={message.id} />;
  });
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">{messagesList}</div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <form onSubmit={SubmitHandler}>
          <input
            type="text"
            placeholder="Type a message"
            value={current}
            onChange={updateMessage}
          />
          <button type="submit">Send a message</button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
