import React from "react";
export default function AnswerHelp(props){
    const handleYes = () =>{
        props.actions.handleYes()
    }
    const handleNo = () =>{
        props.actions.handleNo()
    
    }    
    return(
            <div>
                <button className="btn_setting" onClick={() => handleYes()}>Yes</button>
                <button className="btn_setting second_btn" onClick={() => handleNo()}>No</button>
            </div>
        )
    }