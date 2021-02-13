import useAxios from 'axios-hooks';

export default function Advertising() {
	const [{data, loading, error}] = useAxios(
		'http://localhost:3003/api/restaurants/top3'
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	return (
		<div>
			<h2>Advertising</h2>
			<p>{data.restaurants[0].name}</p>
			<link></link>
		</div>
	);
}
