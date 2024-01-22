import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleNo = () =>{
    const message = createChatBotMessage('Если нужна помощь - обращайтесь');
    updateState(message)
  }
  const handleYes = () => {
    const message = createChatBotMessage('Вы можете посмотреть наше FAQ или напрямую написать нам',{widget:'Answer'});
    updateState(message)
  }
  const handleStartChat = () => {
    const message = createChatBotMessage('Что вы хотели спросить?');
    updateState(message)
  }
  const updateState =(message) =>{
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }))
  }

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleYes,
            handleNo,
            handleStartChat
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;