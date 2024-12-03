import { useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
  summary: string;
  genres: string[];
  medium_cover_image: string;
}
export default function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} alt={movie.title} />
              <h2 className="text-2xl font-bold">{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul className="list-inside list-disc">
                {movie.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
