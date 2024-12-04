import { useEffect, useState } from "react";
import Movie from "../components/Movie";

export interface MovieType {
  id: number;
  title: string;
  summary: string;
  genres: string[];
  medium_cover_image: string;
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<MovieType[]>([]);

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
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
