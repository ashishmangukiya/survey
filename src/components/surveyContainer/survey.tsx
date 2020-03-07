import React from 'react'
import logo from '../../assets/survey-logo.jpg'
import { useHistory } from "react-router-dom";
import questionsArray from '../questions.json'

export const Survey=()=> {
    let history = useHistory();
    localStorage.removeItem('USER')
    localStorage.setItem('QUESTIONS',JSON.stringify(questionsArray))

return (
    <div className="header">
        <div className="main-box">
            <div className="sub-box">
                <img src={logo} className="image-style"/>
                <div className="button-wrap">
                    <button onClick={()=>history.push('/survey')}>Start Survey</button>
                </div>
            </div>
        </div>
    </div>
    )
}