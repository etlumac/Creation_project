import { createChatBotMessage } from 'react-chatbot-kit'
import React from 'react'
import AnswerYes from './AnswerYes'
import AnswerHelp from './AnswerHelp'
const config = {
  botName: 'Creation',
  initialMessages: [createChatBotMessage('Здравствуйте, есть ли у вас вопросы?', { widget: 'QustionHelp' })],
  widgets: [
    {
      widgetName: 'Answer',
      widgetFunc: (props) => <AnswerYes {...props} />,
      mapStateToProps: ['gist']
    },
    {
      widgetName: 'QustionHelp',
      widgetFunc: (props) => <AnswerHelp {...props} />,
      mapStateToProps: ['gist']
    }

  ]

}

export default config
