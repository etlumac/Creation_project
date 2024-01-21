import React from "react";
export default function AnswerYes(props){
    return(
        <div>
            <button className="start-answer" onClick={(e) => {
      e.preventDefault();
      window.location.href='/FAQ';
      }}>FAQ</button>
        </div>
    )
}