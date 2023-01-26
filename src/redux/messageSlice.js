import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    chat: [
      {
        id: 0,
        chatName: "1st Chat",
        messages: [
          {
            id: 0,
            messageContent: "1st Chat message",
            reciever: "reciever",
          },
          {
            id: 1,
            messageContent: "1st Chat reply",
          },
        ],
      },
      {
        id: 1,
        chatName: "John",
        messages: [
          {
            id: 0,
            messageContent: "John message",
            reciever: "reciever",
          },
          {
            id: 1,
            messageContent: "John reply",
          },
        ],
      },
      {
        id: 2,
        chatName: "Samy",
        messages: [
          {
            id: 0,
            messageContent: "Samy message",
            reciever: "reciever",
          },
          {
            id: 1,
            messageContent: "Samy reply",
          },
        ],
      },
    ],
  },
  reducers: {
    addMessage: (state, action) => {
      // console.log(action);
      state.chat[action.payload.chatID].messages.push({
        id: state.chat[action.payload.chatID].messages.length,
        messageContent: action.payload.current,
      });
      // console.log(state.chat[action.payload].chatName);
      //   state.chat[0].messages.push;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;
