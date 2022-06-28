import React, {useState, useEffect,useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies]=useState([]);
  const [isLoading, setisLoading]=useState(false);
  const [error, setError]=useState(null);
  
  /*sending a get request with help of then
  const fetchMovieHandler=()=>{
  fetch('https://swapi.dev/api/films/').then(response=>{
    return response.json();
  }).then(data=>{
    const transformedMovies=data.results.map((movieData)=>{
      return{
        id: movieData.episode_id,
        title: movieData.title,
        openingText:movieData.opening_crawl,
        releaseDate:movieData.release_date
      }
    });
    setMovies(transformedMovies);
  });
}*/

// async function fetchMovieHandler(){
const fetchMovieHandler=useCallback(async()=>{  
setisLoading(true);
  setError();
  try{
    const response=await fetch('https://swapi.dev/api/films/')
    if(!response.ok){
      throw new Error("Something gone wrong..");
    }
    const data=await response.json();
    
    const transformedMovies=data.results.map((movieData)=>{
      return{
        id: movieData.episode_id,
        title: movieData.title,
        openingText:movieData.opening_crawl,
        releaseDate:movieData.release_date
      }
    });
    setMovies(transformedMovies);    
  }catch(error){
    setError(error.message);
  }
  setisLoading(false);
},[]);

useEffect(()=>{
  fetchMovieHandler();
},[fetchMovieHandler]);

let content=<p>No Movies Found.</p>;

if(movies.length>0){
  content=<MoviesList movies={movies}/>;
}

if(error){
  content=<p>{error}</p>;
}

if(isLoading){
  content=<p>Api is Loading...</p>;
}

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* in line code
        {isLoading && <p>Api is Loading...</p>}
        {movies.length>0 && <MoviesList movies={movies}/>}
        {!isLoading&&movies.length===0 && !error && <p>No Movies Found.</p>}
        {!isLoading && error && <p>{error}</p>} */}
        <section>{content}</section>
      </section>
    </React.Fragment>
  );
}

export default App;
