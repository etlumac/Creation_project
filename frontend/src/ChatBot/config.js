import { createChatBotMessage } from 'react-chatbot-kit';
import AnswerYes from './AnswerYes';
import AnswerHelp from './AnswerHelp';
const config = {
  botName: "Creation",
  initialMessages: [createChatBotMessage(`Здравствуйте, есть ли у вас вопросы?`,{widget:'AnswerHelp'})],
  widgets: [
    {
      widgetName: 'Answer',
      widgetFunc: (props) => <AnswerYes {...props} />,
      mapStateToProps: ['gist'],
    },
    {
      widgetName: 'QustionHelp',
      widgetFunc: (props) => <AnswerHelp {...props} />,
      mapStateToProps: ['gist'],
    }
    
  ]
  
};

export default config;