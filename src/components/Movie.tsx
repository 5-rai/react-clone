import { Link } from "react-router-dom";

interface MovieProps {
  id: number;
  coverImg: string;
  title: string;
  summary: string;
  genres: string[];
}

export default function Movie({
  id,
  coverImg,
  title,
  summary,
  genres,
}: MovieProps) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <Link to={`movie/${id}`}>
        <h2 className="text-2xl font-bold">{title}</h2>
      </Link>
      <p>{summary}</p>
      <ul className="list-inside list-disc">
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}
