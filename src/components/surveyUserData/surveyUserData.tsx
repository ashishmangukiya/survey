import React from 'react'
import { useHistory } from "react-router-dom";
import Axios from 'axios'
import { useEffect, useState } from "react";
import {userSchema} from '../../schema'


export const SurveyUserData = () => {
	let history = useHistory();
	const [country, setAllCountry] = useState([])
	const [name, setName] = useState("")
	const [nameError, setNameError] = useState("")
	const [email, setEmail] = useState("")
	const [emailError, setEmailError] = useState("")
	const [countryName, setCountryName] = useState("")
	const [countryNameError, setCountryNameError] = useState("")
	const [age, setAge] = useState("")
	const [ageError, setAgeError] = useState("")
	const [gender, setGender] = useState("")

	useEffect(() => {
		(async () => {
			let response = await Axios.get('https://restcountries.eu/rest/v2/all')
			setAllCountry(response.data)
		})()
	}, [])

	let onchangeText = (data: string, type: string) => {
		if (data != ' ') {
			switch (type) {
				case 'name':
					setName(data);
					setNameError("")
					break;
				case 'email':
					setEmail(data);
					setEmailError("");
					break;
				case 'country':
					setCountryName(data);
					setCountryNameError("")
					break;
				case 'age':
					setAge(data);
					setAgeError("")
					break;
				case 'gender':
					setGender(data);
			}
		}
	}

	let onsubmit = () => {
		let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if (!name.length) {
			setNameError("Full name cannot be blank.")
		}
		if (!email.length) {
			setEmailError("Email cannot be blank.")
		} else if(!reg.test(email)) {
			setEmailError("Invalid Email.")
		}
		if (!countryName.length) {
			setCountryNameError("country cannot be blank.");
		}
		if (!age.length) {
			setAgeError("Age cannot be blank.")
		}
		if (name.length && email.length && reg.test(email) && countryName.length && age.length) {
			localStorage.setItem('USER', JSON.stringify({ name, email, country: countryName, age, gender }))
			history.replace('/survey/question/1')
		}
	}

	return (
		<div className="header">
			<div className="main-box">
				<div className="form">
					<p>User Details</p>
					<div className="single-field">
						<label >Full Name <sup>*</sup></label>
						<input value={name} onChange={(data) => { onchangeText(data.target.value, 'name') }} type="text" className="form-control" />
						{
							nameError.length ?
								<div className="error">{nameError}</div> : null
						}
					</div>
					<div className="single-field">
						<label >Email <sup>*</sup></label>
						<input value={email} onChange={(data) => { onchangeText(data.target.value, 'email') }} type="text" className="form-control" />
						{
							emailError.length ?
								<div className="error">{emailError}</div> : null
						}
					</div>
					<div className="single-field">
						<label >Country <sup>*</sup></label>
						<select value={countryName} onChange={(data) => { onchangeText(data.target.value, 'country') }} className="form-control">
							<option value="">Select</option>
							{
								country.map((data:userSchema, i) => (
									<option key={i} value={data.name}>{data.name}</option>
								))
							}
						</select>
						{
							countryNameError.length ?
								<div className="error">{countryNameError}</div> : null
						}
					</div>
					<div className="two-in-one">
						<div className="single-field padding-right">
							<label >Age <sup>*</sup></label>
							<input value={age} onChange={(data) => { onchangeText(data.target.value, 'age') }} type="number" className="form-control" />
							{
								ageError.length ?
									<div className="error">{ageError}</div> : null
							}
						</div>
						<div className="single-field padding-left">
							<label >Gender </label>
							<select value={gender} onChange={(data) => { onchangeText(data.target.value, 'gender') }} className="form-control">
								<option value="">Select</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</div>
					</div>
					<div className="md-button center">
						<button onClick={() => onsubmit()}>Continue</button>
					</div>
				</div>
			</div>
		</div>
	)
}