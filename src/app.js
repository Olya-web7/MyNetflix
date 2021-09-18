import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Jumbotron from './components/jumbotron';

export default function App() {

  const [shows, setShows] = useState([]);

    useEffect(() => {
        axios.get('https://api.tvmaze.com/shows')
            .then(res => {
                console.log(res)
                setShows(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

  return ( 
    <Jumbotron.Container>      
      {shows.map(show => (
          <Jumbotron key={show.id} direction={show.direction}>
          <Jumbotron.Pane>
              <Jumbotron.Title>{show.name}</Jumbotron.Title>
              <Jumbotron.SubTitle>{show.rating.average}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
              <Jumbotron.Image src={show.image.medium} />       
          </Jumbotron.Pane>
          </Jumbotron>
      ))}
  </Jumbotron.Container>   
  );
}
