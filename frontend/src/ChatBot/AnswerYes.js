import React from 'react'
import PropTypes from 'prop-types'
export default function AnswerYes (props) {
  const handleStartChat = () => {
    props.actions.handleStartChat()
  }
  return (
        <div>
            <button className="btn_setting" onClick={(e) => {
              e.preventDefault()
              window.location.href = '/FAQ'
            }}>FAQ</button>
      <button className="btn_setting second_btn" onClick={() => handleStartChat()}>Chat</button>
        </div>
  )
}
AnswerYes.PropTypes = {
  actions: PropTypes.shape({
    handleStartChat: PropTypes.func.isRequired,
  }).isRequired
}

