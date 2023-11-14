
const HeaderPage = ({movie}) => {
  const {overview, original_title, vote_average  } = movie;
  return (
    <div className="absolute top-1/4 mx-20 w-1/2 pb text-white font-bold">
      <p className="text-5xl py-8">{original_title}</p>
      <div className="flex items-center pb-5 text-lg">
        <img className="pr-4" src="'../../../Images/imdb (2).png"></img>
        <p>{vote_average}/10</p>
      </div>
      <p className="w-75 text-xl pb-8">{overview}</p>
      <button className="bg-red-700 hover:bg-red-500 text-white px-4 py-2 rounded-md">Watch Trailer</button>
    </div>
  )
}

export default HeaderPage;