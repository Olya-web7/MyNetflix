import { useContext, useState, useEffect } from "react";
import ShowsContext from '../context/shows/showsContext';
import MovieListHeading from "../components/MovieListHeading";
import AddFavourites from "../components/AddFavourites";
import RemoveFavourites from "../components/RemoveFavourites";
import './myPage.css';

const MyPage = () => {
  const showsContext = useContext(ShowsContext);
  const [favourites, setFavourites] = useState([]);
  const { shows } = showsContext;

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('favourites')
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('favourites', JSON.stringify(items));
  };


  const addFavouriteMovie = (show) => {
    const newFavouriteList = [...favourites, show];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (show) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.show.id !== show.show.id
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };


  return (
    <div className='movie-app'>

        <div className='heading'>
          <MovieListHeading heading='Movies'/>
        </div>
        <div className='wrapper'>
          {shows.map((show) => (
                <div className='image-container' key={show.show.id}>

                  <img src={show.show.image
                    ? show.show.image.medium
                    : "https://t3.ftcdn.net/jpg/01/84/81/64/360_F_184816468_sXO2m7Xhy2xqENls5YxrKlmFg3Ii82Mr.jpg"
                  }
                       name={show.show.name}
                       alt={show.show.name}
                  />

                  <div
                    onClick={() => addFavouriteMovie(show)}
                    className='overlay favourites'>
                    <AddFavourites />
                  </div>
                  <div className='title'>
                    <h3>{show.show.name}</h3>
                  </div>
                </div>
            ))}
        </div>

      <div className='heading'>
        <MovieListHeading heading='My Favourites'/>
      </div>
      <div className='wrapper'>
        {favourites.map((favourite) => (
            <div className='image-container' key={favourite.show.id}>
              <img src={favourite.show.image
                ? favourite.show.image.medium
                : "https://t3.ftcdn.net/jpg/01/84/81/64/360_F_184816468_sXO2m7Xhy2xqENls5YxrKlmFg3Ii82Mr.jpg"
              }
                   name={favourite.show.name}
                   alt={favourite.show.name}
              />

              <div
                onClick={() => removeFavouriteMovie(favourite)}
                className='overlay d-flex align-items-center justify-content-center'>
                <RemoveFavourites />
              </div>
            </div>
          ))}
      </div>

    </div>
  );
};

export default MyPage;
