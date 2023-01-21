import React, { Fragment } from "react";
import "./Message.css";
function Message({ reciever, content }) {
  // d.toString().split(':')[0] + ":" +  d.toString().split(':')[1] + " " + d.toString().split(':')[2].split(' ')[1]
  const date = new Date().toLocaleTimeString();
  const time =
    date.toString().split(":")[0] +
    ":" +
    date.toString().split(":")[1] +
    " " +
    date.toString().split(":")[2].split(" ")[1];

  const renderMessage = () => {
    return (
      <p className={`message ${reciever ? reciever : ""}`}>
        {/* <span className="message__name">Samy</span> */}
        <span className="message__content">{content}</span>

        <div className="message__wrap">
          <span className="message__timestamp">{time}</span>
        </div>
      </p>
    );
  };
  return <Fragment>{renderMessage()}</Fragment>;
}

export default Message;
