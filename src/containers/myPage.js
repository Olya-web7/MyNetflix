// eslint-disable-next-line
import { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowsContext from '../context/shows/showsContext';
import MovieListHeading from "../components/MovieListHeading";
import AddFavourites from "../components/AddFavourites";
import './myPage.css';

const MyPage = () => {
  const showsContext = useContext(ShowsContext);
  const [favourites, setFavourites] = useState([]);
  const { shows } = showsContext;

  const addFavouriteMovie = (show) => {
    const newFavouriteList = [...favourites, show];
    setFavourites(newFavouriteList);
    // saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className='movie-app container-fluid'>

      {/*Movies----------------------------------------------------*/}

        <div className='m-4'>
          <MovieListHeading heading='Movies'/>
        </div>

        <div className='d-flex m-2 flex-wrap'>
          {shows.map((show) => (
                <div className='image-container d-flex m-3' key={show.show.id}>

                  <img src={show.show.image
                    ? show.show.image.medium
                    : "https://t3.ftcdn.net/jpg/01/84/81/64/360_F_184816468_sXO2m7Xhy2xqENls5YxrKlmFg3Ii82Mr.jpg"
                  }
                       name={show.show.name}
                       alt={show.show.name}
                  />

                  <div
                    onClick={() => addFavouriteMovie(show)}
                    className='overlay d-flex align-items-center justify-content-center'>
                    <AddFavourites />
                  </div>
                  <div className='position-absolute m-2'>
                    <h3 className='text-center'>{show.show.name}</h3>
                  </div>
                </div>
            )
          )}
        </div>

      {/*Favourites------------------------------------*/}

      <div className='m-4'>
        <MovieListHeading heading='Favourites'/>
      </div>

      <div className='d-flex m-2 flex-wrap'>
        {favourites.map((show) => (
            <div className='image-container d-flex m-3' key={show.show.id}>

              <img src={show.show.image
                ? show.show.image.medium
                : "https://t3.ftcdn.net/jpg/01/84/81/64/360_F_184816468_sXO2m7Xhy2xqENls5YxrKlmFg3Ii82Mr.jpg"
              }
                   name={show.show.name}
                   alt={show.show.name}
              />

              <div className='overlay d-flex align-items-center justify-content-center'>
                <AddFavourites />
              </div>
              <div className='position-absolute top-0'>
                <h3 className='text-center'>{show.show.name}</h3>
              </div>
            </div>
          )
        )}
      </div>

    </div>
  );
};

export default MyPage;
