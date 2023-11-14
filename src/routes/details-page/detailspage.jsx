import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";

const DetailsPage = () => {
  const { id } = useParams();
  const [detailsPage, setDetailsPage] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=467f875d76ce5f71c9257058f2d8e992`)
      .then((response) => response.json())
      .then((data) => {
        setDetailsPage(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [id]);

  return (
    <div className="flex">
    <Sidebar />
      {detailsPage && (
        <div className="py-8 ml-10 w-4/5">
        <img
        className="w-11/12 h-1/2 object-cover justify-center rounded-xl mb-6"
        src={`https://image.tmdb.org/t/p/original${detailsPage.backdrop_path}`}
        alt="Backdrop Image"
      />
        <div className="flex flex-row mb-6 font-bold">
            <h2 className="list-disc pr-6 ">{detailsPage.original_title}</h2>
            <h2 className="pr-6">{detailsPage.release_date}</h2>
            <p className="pr-6">PG-13</p>
        </div>
          <p className="w-4/5 font-semibold">{detailsPage.overview}</p>
        </div>
      )}
     
    </div>
  );
};

export default DetailsPage;