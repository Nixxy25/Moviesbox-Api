import { Link } from "react-router-dom";
import { Fragment } from "react";
const MoviePage = ({ movies }) => {
  return (
    <Fragment>


    <div className="pt-10 px-16">
    <div className="flex justify-between pb-10">
      <p className="text-2xl font-bold font-sans">Featured Movies</p>
      <p className="text-lg">See More </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-20 ">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/details/${movie.id}`}>
        <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
          <h2 className="text-lg  font-semibold">{movie.release_date}</h2>
          <p className="text-sm">{movie.original_title}</p>
          <div className="flex items-center mt-2 pb-10">
            <img src="'../../../Images/imdb (2).png" alt="IMDb Logo"/>
            <p className="ml-2">{movie.vote_average}/10</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
    </div>
    </Fragment>
  );
};

export default MoviePage;