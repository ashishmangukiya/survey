import React from 'react'
import { useHistory } from "react-router-dom";
import { questionsSchema } from '../../schema';

export const Report = () => {
	let history = useHistory();
	let userDetails = JSON.parse(String(localStorage.getItem('USER')))
	if (userDetails == null) {
		history.replace('/')
	}
	let questions = JSON.parse(String(localStorage.getItem('QUESTIONS')))

	return (
		<div className="header">
			<div className="main-box">
				{
					userDetails != null ?
						<div className="form">
							<p>Report</p>
							<div className="userDetails">
								<div><b>Name :</b> <span>{userDetails.name}</span></div>
								<div><b>Email :</b> <span>{userDetails.email}</span></div>
								<div><b>Country :</b> <span>{userDetails.country}</span></div>
								<div><b>Age :</b> <span>{userDetails.age}</span></div>
								<div><b>Gender :</b> <span>{userDetails.gender.length ? userDetails.gender : 'not specified'}</span></div>
							</div>
							<p>Questionnaires</p>
							<div className="questions">
								{
									questions.map((question: questionsSchema, i: number) => (
										<div className="align-questions-col">
											<div key={i} className="align-questions">
												<b>{question.id + '.'}&nbsp;</b>
												<div>{question.question}</div>
											</div>
											<div key={i} className="align-questions">
												<b>Ans.&nbsp;</b>
												<div>{question.selected}</div>
											</div>
										</div>
									))
								}
							</div>
						</div> : null
				}
			</div>
		</div>
	)
}