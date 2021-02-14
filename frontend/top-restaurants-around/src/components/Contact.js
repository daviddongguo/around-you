import axios from 'axios';
import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Row} from 'reactstrap';

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
	const title = (
		<div class='title' id='contact_title'>
			<h2>Contact us</h2>
		</div>
	);

	const contactForm = (
		<Form onSubmit={onSubmit}>
			<FormGroup row>
				<Col sm={4}>
					<Input
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='form-control'
					></Input>
				</Col>
				<Col sm={8}>
					<Input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='form-control'
					></Input>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Col sm={12}>
					<Input
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
						className='form-control'
					></Input>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Col sm={12}>
					<Input
						type='textarea'
						rows={5}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className='form-control'
					></Input>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Col sm={8}></Col>
				<Col sm={4}>
					<div class='d-grid gap-2'>
						<Button className='btn btn-danger btn-sm'> Send </Button>
					</div>
				</Col>
			</FormGroup>
		</Form>
	);

	return (
		<div id='contact'>
			<Row class='row justify-content-sm-center'>
				<Col></Col>
				<Col sm={10}>
					<Row>{title}</Row>
					<Row>{contactForm}</Row>
				</Col>
				<Col></Col>
			</Row>
		</div>
	);
};

export default Contact;
