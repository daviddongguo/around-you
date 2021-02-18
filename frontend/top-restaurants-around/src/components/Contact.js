import axios from 'axios';
import React, {useState} from 'react';
import {Button, Col, Form, Input, Row} from 'reactstrap';
import config from '../config/index';

const Contact = () => {
	const [name, setName] = useState('Name');
	const [email, setEmail] = useState('Email');
	const [subject, setSubject] = useState('Subject');
	const [message, setMessage] = useState('Message');

	const onSubmit = async (event) => {
		event.preventDefault();
		await axios.post(config.server + '/api/emailsender', {
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
			<Row>
				<Col sm='12' md={4}>
					<Input
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='form-control'
					></Input>
				</Col>
				<Col sm='12' md={8}>
					<Input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='form-control'
					></Input>
				</Col>
			</Row>
			<Row>
				<Col sm='12' md={12}>
					<Input
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
						className='form-control'
					></Input>
				</Col>
			</Row>
			<Row>
				<Col sm='12' md={12}>
					<Input
						type='textarea'
						rows={5}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className='form-control'
					></Input>
				</Col>
			</Row>
			<Row>
				<Col sm='12' md={8}>
					<div
						class='g-recaptcha'
						data-sitekey='6LcGlFgaAAAAAM4o8Hcf5zasECmqCjHG_D9OVdn1'
					></div>
				</Col>
				<Col sm='12' md={4}>
					<div class='d-grid gap-2'>
						<Button className='btn btn-danger btn-sm' size='lg'>
							{' '}
							Send{' '}
						</Button>
					</div>
				</Col>
			</Row>
		</Form>
	);

	return (
		<div id='contact'>
			<Row className='row justify-content-sm-center'>
				<Col></Col>
				<Col sm='12' md={10}>
					<Row>{title}</Row>
					<Row>{contactForm}</Row>
				</Col>
				<Col></Col>
			</Row>
		</div>
	);
};

export default Contact;
