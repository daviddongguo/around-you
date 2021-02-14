import useAxios from 'axios-hooks';

export default function Advertising() {
	const [{data, loading, error}] = useAxios(
		'http://localhost:3003/api/advertisings'
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	return (
		<div id='advertising'>
			<div id='advertising_body'>{data.body}</div>
			<button>
				<a href={data.website.url}>
					<p>{data.website.text}</p>
				</a>
			</button>
		</div>
	);
}
