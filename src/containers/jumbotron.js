import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Jumbotron} from '../components';

export function JumbotronContainer() {

    const [shows, setShows] = useState([]);

    useEffect(() => {
        axios.get('https://api.tvmaze.com/shows')
            .then(res => {
                console.log(res, shows.length)
                setShows(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

        return (
        <Jumbotron.Container>
            {shows.length = 3}
            {shows.map((item) => (
                <Jumbotron key={item.id}>
                    <Jumbotron.Pane>
                        <Jumbotron.Title>{item.name}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{item.rating.average}</Jumbotron.SubTitle>
                    </Jumbotron.Pane>
                    <Jumbotron.Pane>
                        <Jumbotron.Image src={item.image.medium} />
                    </Jumbotron.Pane>
                </Jumbotron>
            ))}
        </Jumbotron.Container>
    );
}
