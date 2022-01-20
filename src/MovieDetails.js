import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {

  const { movieId } = useParams();
  const [ movie, setMovie ] = useState({});
  
  useEffect( () => {
    axios({
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
      params: {
        api_key: '12aa36d931055e09b22776ec6b2267af'
      }
    })
      .then( (res) => {
        setMovie(res.data);
      });
  }, [movieId]);

  const { original_title, tagline, overview, poster_path } = movie;
  return(
    <div className="poster">
      <div className="description">
        <h2>{original_title}</h2>
        <h3>{tagline}</h3>
        <p>{overview}</p>
      </div>
      <div className="poster-image">
        {
          poster_path
            ? <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={`Movie poster for ${original_title}`}
              />
            : null
        }
      </div>
    </div>
  )
}

export default MovieDetails;



// When the user clicks on a movie image, take them to a new "page" and show them details about the movie they clicked on.
// STEPS
    // The movie details appear on their own page, so like the catalogue, we can create *a movie details component*, and render it conditionally with our router.
          // We need a *Route* for our component. This Route uses the movie's unique ID in the URL bar. We need to create a route path that will render our component no matter what ID we put in.
                // We need to *Link* to this Route (from the catalogue page).
          // We need to go get the ID to use on our page. We can do this with the *useParams* Hook from react-router-dom.
    // Use the movie ID to make a call to TMDB for the movie's details.
          // We already have *axios*, let's use that!
          // This happens as soon as the component mounts, so we can again use *useEffect with an empty dependency array*.
          // When we get back our movie details, we want to put them somewhere, such that they will show up on the page. We can use *state*!
    // We need to set up our JSX such that when we put the movie details into state (triggering a re-render), they will appear on the page.
//
// WHAT WE NEED
//    - A component for our movie details
//    - A router (already installed above), these modules:
//          > Route
//          > Link (in the catalogue component!)
//          > useParams
//    - axios (already installed above)
//    - useEffect with an empty dependency array
//    - useState