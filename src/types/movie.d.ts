interface Movie {
  id: number;
  medium_cover_image: string;
  title: string;
  summary: string;
  genres: string[];
}

interface MovieResponse {
  data: {
    movie: Movie;
  };
}
interface MoviesResponse {
  data: {
    movies: Movie[];
  };
}
