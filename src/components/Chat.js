import React, { useState } from "react";
import "./Chat.css";

import Message from "./Message";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/messageSlice";

function Chat({ chatID }) {
  // const reciever = "reciever";

  const [current, setCurrent] = useState("");

  const { chat } = useSelector((state) => state.message);
  const messages = chat[chatID].messages;
  const dispatch = useDispatch();

  const updateMessage = (e) => {
    setCurrent(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    // messages.push({
    //   id: messages.length,
    //   messageContent: current,
    // });
    dispatch(addMessage({ chatID, current }));
    setCurrent("");
    console.log(chat);
  };
  const messagesList = messages.map((message) => {
    return (
      <Message
        content={message.messageContent}
        key={message.id}
        reciever={message.reciever}
      />
    );
  });
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>{chat[chatID].chatName}</h3>
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
