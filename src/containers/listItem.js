// import * as ROUTES from '../constants/routes';
import {List} from "../components/listItem";

const ListItem = ({ image, name, rating, id }) => {
  return (
    <List to={`/singleshow/${id}`} className="listitem">
      <img src={image} alt={name} />
      <List.Info>
        <List.Name>{name}</List.Name>
        <List.Rating>{rating}</List.Rating>
      </List.Info>
    </List>
  );
};

export default ListItem;
