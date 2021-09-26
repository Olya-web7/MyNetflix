import { useContext } from "react";
import ShowsContext from '../context/shows/showsContext';
import {ListItem} from "../components";
import Loader from "../components/Loader";
import {MyPageContainer} from "../components";

const MyPage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <MyPageContainer>
          {shows.map((item) => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image
                  ? item.show.image.medium
                  : "https://t3.ftcdn.net/jpg/01/84/81/64/360_F_184816468_sXO2m7Xhy2xqENls5YxrKlmFg3Ii82Mr.jpg"
              }
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : "No rating"
              }
            />
          ))}
        </MyPageContainer>
      )}
    </div>
  );
};

export default MyPage;
