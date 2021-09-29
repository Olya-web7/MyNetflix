import { useReducer } from "react";
import axios from "axios";
import ShowsContext from "./showsContext";
import ShowsReducer from "./showsReducer"

import { SEARCH_SHOWS } from "../types";

const ShowsState = (props) => {
  const initialState = {
    shows: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  const searchShows = async (searchTerm) => {

    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );

    console.log(data);

    dispatch({
      type: SEARCH_SHOWS,
      payload: data,
    });
  };

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        loading: state.loading,
        searchShows,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsState;
