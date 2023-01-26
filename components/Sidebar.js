import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector } from "react-redux";

function Sidebar({ setChatID }) {
  const { chat } = useSelector((state) => state.message);

  const sidebarChatList = chat.map((chat) => {
    // console.log(chat);
    // console.log(chat.messages[0]);
    return (
      <SidebarChat
        key={chat.id}
        id={chat.id}
        chatName={chat.chatName}
        lastMessage={chat.messages[chat.messages.length - 1].messageContent}
        setChatID={setChatID}
      />
    );
  });

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="" />

        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">{sidebarChatList}</div>
    </div>
  );
}

export default Sidebar;
