import { useEffect, useState } from "react"

export default function PostList() {
	const [trendingMovies, setTrendingMovies] = useState([])

	const getTrendingMovies = async () => {
		const url = 'https://movies-tv-shows-database.p.rapidapi.com/?page=1';
		const options = {
			method: 'GET',
			headers: {
				Type: 'get-trending-movies',
				'X-RapidAPI-Key': 'e2e59a7f62msh54bb167eb9e9130p1e4d48jsn241c0ac43f71',
				'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
			}
		};

		try {
			const response = await fetch(url, options);
			const result = await response.text();
			console.log(result);
			setTrendingMovies(result)
		} catch (error) {
			console.error(error);
		}
	}


	useEffect(() => {

		getTrendingMovies()

	}, [])


	return (
		<div>

			{
				trendingMovies && trendingMovies.length > 0 ?

					<pre>
						{JSON.stringify(trendingMovies, null, 2)}
					</pre>

					:
					<p>
						No movies loaded
					</p>
			}



		</div>
	)
}
