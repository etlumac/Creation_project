import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const updateState =(message) =>{
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
  const handleHello = () => {
    const botMessage = createChatBotMessage('Посмотрите наш FAQ',{widget:'Answer'});

    updateState(botMessage)
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            //initialAction
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;