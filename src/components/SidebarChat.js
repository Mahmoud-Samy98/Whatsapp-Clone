import React from "react";
import { Avatar } from "@mui/material";
import "./SidebarChat.css";

function SidebarChat({ id, chatName, lastMessage, setChatID }) {
  const viewChat = () => {
    console.log(
      `id: ${id}, chatname: ${chatName}, last message: ${lastMessage}`
    );
    setChatID(id);
  };
  return (
    <div className="sidebarChat" onClick={viewChat}>
      <Avatar />

      <div className="sidebarChat__info">
        <h2>{chatName}</h2>
        <p>{lastMessage}</p>
      </div>
    </div>
  );
}

export default SidebarChat;
