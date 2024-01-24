import React from 'react';
import sendMessage from './telegram/telegramMsg.js'
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
    updateState(message,'start')
  }
  const ask_mail = (message) =>{
    const mail = createChatBotMessage('Укажите вашу почту');
    updateState(mail,message)
  }
  const send_msg = (message,checker) =>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/
    if (emailRegex.test(message)) {
      /**
        @param {String} the text to send
      **/
      sendMessage(message + " задал вопрос: " + checker);
    }
    else{
      const message = createChatBotMessage('Проверьте почту');
      updateState(message,'start')
    }
  }
  
  const updateState =(message,checker = "") =>{
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker
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
            handleStartChat,
            send_msg,
            ask_mail
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;