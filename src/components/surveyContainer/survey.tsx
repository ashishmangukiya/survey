import React from 'react'
import logo from '../../assets/survey-logo.jpg'
import { useHistory } from "react-router-dom";

export const Survey=()=> {
    let history = useHistory();
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