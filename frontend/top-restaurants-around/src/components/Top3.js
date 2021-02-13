import useAxios from 'axios-hooks';

export default function Top3() {
	const [{data, loading, error}] = useAxios(
		'http://localhost:3003/api/restaurants/top3'
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	const list = data.restaurants.map((r) => {
		const imageUrl =
			'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyB2pcmC0RETrG_mCDbSlf58Zz6AWdtsvW0&maxwidth=400&photoreference=' +
			r.photoreference;

		return (
			<td>
				<p>{r.name}</p>
				<p>{r.rating}</p>
				<img src={imageUrl} alt='' width='125px' height='84px' />
			</td>
		);
	});

	return (
		<div>
			<table>
				<tr>{list}</tr>
			</table>
		</div>
	);
}
