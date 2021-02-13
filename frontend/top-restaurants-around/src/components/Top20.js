import useAxios from 'axios-hooks';

export default function Top20() {
	const [{data, loading, error}] = useAxios(
		'http://localhost:3003/api/restaurants/top20bydistance'
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;
	const list = data.restaurants.map((r) => {
		const imageUrl =
			'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyB2pcmC0RETrG_mCDbSlf58Zz6AWdtsvW0&maxwidth=400&photoreference=' +
			r.photoreference;

		return (
			<tr>
				<img src={imageUrl} alt='' width='125px' height='84px' />
				<p>Name: {r.name}</p>
				<p>Description: {r.description}</p>
				<p>Rating: {r.rating}</p>
				<p>Address: {r.address}</p>
				<p>Phone Number: {r.phonenumber}</p>
			</tr>
		);
	});

	return (
		<div>
			<table>{list}</table>
		</div>
	);
}
