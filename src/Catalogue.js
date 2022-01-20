import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Catalogue = () => {

  const [allMovies, setAllMovies] = useState([]);

  useEffect( () => {
    axios({
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: '12aa36d931055e09b22776ec6b2267af',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: 1,
        primary_release_year: 1999,
      }
    })
      .then( (res) => {
        setAllMovies(res.data.results);
      });
  }, [])

  return(
    <ul className="catalogue">
      {
        allMovies.map( (individualMovie) => {
          return(
            <li key={individualMovie.id}>
              <Link to={`/movie/${individualMovie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${individualMovie.poster_path}`} alt={`The one-sheet poster for ${individualMovie.original_title}`} />
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Catalogue;

