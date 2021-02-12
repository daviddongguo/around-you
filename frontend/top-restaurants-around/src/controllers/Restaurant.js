import axios from 'axios';

const Top3Show = ({restaurants}) => {
	const ticketList = restaurants.map((r) => {
		return (
			<tr key={r.name}>
				<td>{r.name}</td>
				<td>
					<img src={r.icon} alt='' width='125px' />
				</td>
			</tr>
		);
	});

	return (
		<div>
			<table className='table'>
				<tbody>{ticketList}</tbody>;
			</table>
		</div>
	);
};

Top3Show.getInitialProps = async () => {
	try {
		const {restaurants} = await axios.get(
			`http://localhost:3003/api/restaurants/top3`
		);
		return {restaurants};
	} catch (error) {
		return {restaurants: []};
	}
};

export default Top3Show;
