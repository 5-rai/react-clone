import { Link } from "react-router-dom";

interface MovieProps {
  id: number;
  coverImg: string;
  title: string;
  summary: string;
  genres: string[];
}

function Movie({ id, coverImg, title, summary, genres }: MovieProps) {
  return (
    <div className="flex flex-col gap-5 bg-[#1E293B] text-[#f8fafc] p-12 rounded-lg">
      <img src={coverImg} alt={title} />
      <h2 className="text-2xl">
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary || "설명 없음"}</p>
      <ul className="flex gap-3">
        {genres?.map((genre) => (
          <li key={genre} className="bg-violet-400 rounded-lg px-3 py-1 cursor-pointer">
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
