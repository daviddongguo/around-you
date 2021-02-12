import useAxios from 'axios-hooks';

export default function Top20() {
	const [{data, loading, error}] = useAxios(
		'http://localhost:3003/api/restaurants/top20bydistance'
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;
	const list = data.restaurants.map((r) => {
		return (
			<tr>
				<p>Name: {r.name}</p>
				<p>Description: {r.name}</p>
				<p>Rating: {r.rating}</p>
				<p>Address: {r.vicinity}</p>
				<p>Phone Number: {r.vicinity}</p>
			</tr>
		);
	});

	return (
		<div>
			<table>{list}</table>
		</div>
	);
}
