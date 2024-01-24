// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  console.log(children)
  const parse = (message) => {
    if (children.props.state.checker === "start" && message.includes('')) {
      actions.ask_mail(message);
    }
    if (children.props.state.checker !== "start" && message.includes('')) {
      actions.send_msg(message,children.props.state.checker);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;