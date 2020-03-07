import React from 'react'
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import {questionsSchema} from '../../schema'
export const Questions = () => {
	let history = useHistory();
	let userData = JSON.parse(String(localStorage.getItem('USER')))
	let questionsArray = JSON.parse(String(localStorage.getItem('QUESTIONS')))

	if (userData == null) {
		history.replace('/')
	}
	const [index, setIndex] = useState(Number(history.location.pathname[history.location.pathname.length - 1]))
	const [questions, updateQuestions] = useState(questionsArray)
	useEffect(() => {
		setIndex(Number(history.location.pathname[history.location.pathname.length - 1]))
	}, [history.location.pathname])

	let changeQuestion = (index: number) => {
		if (index >= questions.length - (questions.length - 1) && index <= questions.length) {
			history.push(`/question/${index}`)
		}
	}

	let selectedOption = (selected: string, index: number) => {
		let updateData = []
		for (let data of questions) {
			if (data.id == index) {
				data.selected = selected
			}
			updateData.push(data)
		}
		updateQuestions(updateData)
		localStorage.setItem('QUESTIONS',JSON.stringify(updateData))

	}

	let onsubmit=()=>{
		localStorage.setItem('QUESTIONS',JSON.stringify(questions))
		history.replace('/report')
	}

	return (
		<div className="header">
			<div className="main-box">
				<div className="form">
					{
						questions.map((data: questionsSchema, i: number) => {
							if (data.id == index) {
								return (
									<div key={i} className="question-style">
										<div className="align-questions">
										<p>{data.id+'.'}&nbsp;</p>
										<p>{data.question}</p>
										</div>
										{
											data.options.map((option: string, j: number) => (
												<div key={j} className={`options align-questions ${(data.selected == option)?'green':''}`}>
													<div onClick={() => selectedOption(option, index)} className={`custom-radio ${(data.selected == option)?'custom-border':''}`}>
														{
															(data.selected == option)?
															<span></span>:null
														}
														</div>
													<div className="padding-left cursor" onClick={() => selectedOption(option, index)}>{option}</div>
												</div>
											))
										}
									</div>
								)
							}
						}
						)
					}
					<div className="footer">
						<i className={`fa fa-chevron-left icon ${index > questions.length - (questions.length - 1) ? 'brand-color' : 'grey-color'}`} onClick={() => changeQuestion(index - 1)}></i>
						<i className={`fa fa-chevron-right icon ${index <= questions.length - 1 ? questions[index-1].selected.length?'brand-color' : 'grey-color':'grey-color'}`} onClick={() => changeQuestion(index + 1)}></i>
					</div>
					{
							questions[questions.length-1].selected.length ?
								<div className="md-button center">
									<button className="center1" onClick={() => onsubmit()}>Submit</button>
								</div> : null
						}
				</div>
			</div>
		</div>
	)
}