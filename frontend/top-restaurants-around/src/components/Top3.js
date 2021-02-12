import useAxios from 'axios-hooks';

export default function Top3() {
	const [{data, loading, error}] = useAxios(
		'http://localhost:3003/api/restaurants/top3'
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;
	const list = data.restaurants.map((r) => {
		return (
			<td>
				<p>{r.name}</p>
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
