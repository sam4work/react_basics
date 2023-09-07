import { useEffect, useState } from "react"
import "./PostList.css"

export default function PostList() {
	const [trendingMovies, setTrendingMovies] = useState(null)

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
			const result = await response.json();
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
		<div className="card-wrapper">

			{
				trendingMovies ?
					<>
						{
							trendingMovies.movie_results.map((movie, index) => (
								<article className="card" key={"movie" + index}>
									<div
										className="card-image"
										style={{
											backgroundImage: "url(http://dummyimage.com/184x100.png/5fa2dd/ffffff)"
										}}
									/>
									<h2 className="card-title">{movie.title}</h2>
									<p>{movie.year}</p>
									<p>{movie.imdb_id}</p>

								</article>
							))
						}
					</>
					: null
			}



		</div >
	)
}
