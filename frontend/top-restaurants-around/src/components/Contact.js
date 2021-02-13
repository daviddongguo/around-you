import axios from 'axios';
import React, {useState} from 'react';

const Contact = () => {
	const [name, setName] = useState('Name');
	const [email, setEmail] = useState('Email');
	const [subject, setSubject] = useState('Subject');
	const [message, setMessage] = useState('Message');

	const onSubmit = async (event) => {
		event.preventDefault();
		await axios.post('http://localhost:3003/api/emailsender', {
			name,
			email,
			subject,
			message,
		});
	};

	return (
		<div>
			<h2>Contact us</h2>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='form-control'
					/>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='form-control'
					/>
					<input
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
						className='form-control'
					/>
					<input
						type='textarea'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className='form-control'
					/>
					<button className='btn btn-primary'>Send</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
