import { useState, useContext } from "react";
import ShowsContext from "../context/shows/showsContext";
import OptForm from "./opt-form";
import Feature from "./feature";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const showsContext = useContext(ShowsContext);
  const { searchShows } = showsContext;

  const onSearchHandler = (e) => {
    e.preventDefault();
    searchShows(searchTerm);
  };

  return (
    <Feature>
      <OptForm onClick={onSearchHandler}>
        <OptForm.Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <OptForm.Button>Search</OptForm.Button>
      </OptForm>
    </Feature>
  );
};

export default Searchbar;
