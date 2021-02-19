import useAxios from 'axios-hooks';
import {Button, Card, Col, Row} from 'reactstrap';
import config from '../config/index';

export default function Advertising() {
	const [{data, loading, error}] = useAxios(
		config.server + '/api/advertisings'
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	const list = data.company.slogans.map((paragraph, i) => {
		return <p key={i}>{paragraph}</p>;
	});

	const title = (
		<div class='title'>
			<h2>{''}</h2>
		</div>
	);

	const body = (
		<Card body className='text-center'>
			<div class='card-text'>{list}</div>
		</Card>
	);
	const button = (
		<div class='text-center'>
			<Row>
				<Col></Col>
				<Col sm={12}>
					<Button color='danger'>
						<div>
							<a id='advertising_website_link' href={data.company.url}>
								Website of {data.company.name}
							</a>
						</div>
					</Button>
				</Col>
				<Col></Col>
			</Row>
		</div>
	);
	return (
		<div id='advertising'>
			<Row>
				<Col></Col>
				<Col sm={10}>
					<Row>{title}</Row>
					<Row>{body}</Row>
					<Row>{button}</Row>
					<Row>{title}</Row>
				</Col>
				<Col></Col>
			</Row>
		</div>
	);
}
