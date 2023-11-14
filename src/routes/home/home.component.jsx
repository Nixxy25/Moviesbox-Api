import { useState, useEffect } from "react";
import HeaderPage from "../../components/header/header.component.jsx";
import MainPage from "../../components/main/main.component.jsx";
import SearchField from "../../components/searchbar/searchbar.jsx";
import Footer from "../../components/footer/footer.component.jsx"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };


  const [movies, setMovies]= useState([]);
  const [filterMovies, setFilterMovies] = useState(movies);
  const [searchField, setSearchField] = useState('');


  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=467f875d76ce5f71c9257058f2d8e992")
    .then((response) => response.json())
    .then((users) => { 
      setMovies(users.results)
      console.log(users.results) 
    })
  }, [])
  

  useEffect(() =>{
      const newFilterMovies = movies.filter((movie) => {
          return  movie.original_title.toLocaleLowerCase().includes(searchField);
      });
      setFilterMovies(newFilterMovies);

  }, [movies, searchField]);

  const onSearchChange = (event) =>{
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
  }



  return (
    <div>
     <div className="relative">
      <div className="relative top-0 left-0 right-0 flex items-center justify-between p-4">
      <div className="flex items-center">
      <img className="pr-2" src="../../../Images/tv (3).png"></img>
      <p className="text-lg font-sans font-bold">MoviesBox</p>
      </div>
      <SearchField onChange={onSearchChange} placeHolder="What do you want to search"/>
      <p className="text-lg font-sans font-bold">Sign in</p>
      </div>

     <Carousel responsive={responsive}>
      {filterMovies.map((movie) => (
        <div key={movie.id}>
          <img 
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}/>
          <HeaderPage movie={movie}/>
        </div>
      ))}  
     </Carousel>
     </div>

      <MainPage movies={filterMovies}/>
      <Footer />
  

    </div>
  )
}

export default Home;