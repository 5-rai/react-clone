import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();
  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = (await response.json()) as MovieResponse;
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="w-[30rem] h-screen mx-auto text-[#f8fafc]">
      <h1 className="text-4xl">{movie?.title}</h1>
    </div>
  );
}
export default Detail;
