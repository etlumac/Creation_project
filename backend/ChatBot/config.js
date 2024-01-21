import { createChatBotMessage } from 'react-chatbot-kit';
import AnswerYes from './AnswerYes';
const config = {
  botName: "Creation",
  initialMessages: [createChatBotMessage(`Здравствуйте, могу ли я вам помочь?`)],
  widgets: [
    {
      widgetName: 'Answer',
      widgetFunc: (props) => <AnswerYes {...props} />,
      mapStateToProps: ['gist'],
    },
    
  ]
  
};

export default config;