import { useEffect, useContext } from "react";
import ShowsContext from "../../context/shows/showsContext";
import Loader from "../../components/Loader";
// import * as ROUTES from '../constants/routes';

import './singlePage.css';

const Singlepage = ({ match }) => {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);

  useEffect(() => {
    getSingleShow(match.params.id);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="singleshow">
          <img
            src={
              singleShow.image
                ? singleShow.image.medium
                : "https://t3.ftcdn.net/jpg/01/84/81/64/360_F_184816468_sXO2m7Xhy2xqENls5YxrKlmFg3Ii82Mr.jpg"
            }
            alt={singleShow.name}
          />
          <div className="singleshow__info">
            <h1>{singleShow.name}</h1>
            {singleShow.genres &&
            singleShow.genres.map((genre) => (
              <span key={genre} className="singleshow__genre">
                  {genre}
                </span>
            ))}
            <p>
              <strong>Status:</strong> {singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {singleShow.rating ? singleShow.rating.average : "No rating"}
            </p>
            <p>
              <strong>Official Site:</strong>{" "}
              {singleShow.officalSite ? (
                <a
                  href={singleShow.officalSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  {singleShow.officalSite}
                </a>
              ) : (
                "No official site"
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Singlepage;
