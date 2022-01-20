import { Routes, Route } from 'react-router-dom';
import Catalogue from './Catalogue';
import MovieDetails from './MovieDetails';

function App() {
  return (
    <div className="wrapper">
      <header>
        <h1>Hackflix</h1>
      </header>

      <Routes>
        <Route path="/" element={ <Catalogue /> } />
        <Route path="/movie/:movieId" element={ <MovieDetails /> } />
      </Routes>
    </div>
  );
}

export default App;



// Go get a big ol' list of movies from TheMovieDB (TMDB) and put them on the page.
// STEPS
    // Since this catalogue of movies only appears on one "page" (view) of our app, we know that means we can put it in *its own component*, and that component will be conditionally rendered by our router.
          // We need a *Route* which will render our component at the root URL.
    // Right when the page loads, we will make an AJAX call to TMDB for a bunch of movies.
          // We could use fetch for this, but let's use *axios*! I don't know I just like it ok stop yelling at me.
          // This will happen right when the page loads, which means we can make this API call inside a *useEffect with an empty dependency array*.
          // Once we get data back from our API call, we want to put it somewhere, such that it will show up on the page. We can do this by putting it in *state*!
    // We need to set up our JSX such that once the movies are put into state (triggering a re-render), the catalogue will show up on the page.
//
// WHAT WE NEED
//    - A component for our catalogue
//    - A router (npm package to install), and following modules:
//          > BrowserRouter (to wrap the <App /> component in index.js)
//          > Routes (in App.js)
//          > Route (in App.js)
//    - axios (npm package to install)
//    - useEffect with an empty dependency array
//    - useState



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





