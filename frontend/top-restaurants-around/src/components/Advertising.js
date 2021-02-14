import useAxios from 'axios-hooks';
import {Button, Card, CardText, CardTitle, Col, Row} from 'reactstrap';

export default function Advertising() {
	const [{data, loading, error}] = useAxios(
		'http://localhost:3003/api/advertisings'
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	// const body = <div id='advertising_body'>{data.body}</div>;
	const body = (
		<Card body>
			<CardTitle tag='h5'></CardTitle>
			<CardText>{data.body}</CardText>
			<Button>
				<a href={data.website.url}>{data.website.text}</a>
			</Button>
		</Card>
	);

	return (
		<div id='advertising'>
			<Row>
				<Col></Col>
				<Col sm={10}>{body}</Col>
				<Col></Col>
			</Row>
		</div>
	);
}
