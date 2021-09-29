// eslint-disable-next-line
import { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowsContext from '../context/shows/showsContext';
import {ListItem} from "../components";
import MovieListHeading from "../components/MovieListHeading";
import AddFavourites from "../components/AddFavourites";

const MyPage = () => {
  const showsContext = useContext(ShowsContext);
  // const [favourites, setFavourites] = useState([]);
  const { shows } = showsContext;

  // const addFavouriteMovie = (movie) => {
  //   const newFavouriteList = [...favourites, movie];
  //   setFavourites(newFavouriteList);
  //   // saveToLocalStorage(newFavouriteList);
  // };

  return (
    <div className='movie-app container-fluid'>

        <div>
          <div>
            <MovieListHeading heading='Movies'/>
          </div>

          <div className='d-flex m-2 flex-wrap'>
            {shows.map((show) => (
              <ListItem
                shows={shows}
                favouriteComponent={AddFavourites}
                key={show.show.id}
                id={show.show.id}
                image={
                  show.show.image
                    ? show.show.image.medium
                    : "https://t3.ftcdn.net/jpg/01/84/81/64/360_F_184816468_sXO2m7Xhy2xqENls5YxrKlmFg3Ii82Mr.jpg"
                }
                name={show.show.name}
              />
            ))}
          </div>

        </div>
    </div>
  );
};

export default MyPage;
