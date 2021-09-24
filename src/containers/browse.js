import React, {useContext, useState, useEffect} from "react";
import {SelectProfileContainer} from "./profiles";
import { FirebaseContext } from "../context/firebase";
import {Card, Header, Loading} from '../components';
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import axios from "axios";
import { FooterContainer } from './footer';
import Fuse from 'fuse.js';

export function BrowseContainer({slides}) {

  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [slideRows, setSlideRows] = useState([]);
  const [category, setCategory] = useState('series');


  useEffect(() => {
    axios.get('https://api.tvmaze.com/shows')
      .then(res => {
        console.log(res.data)
        setShows(res.data)
      })
  }, []);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
      </Header>

      <Card.Group>

        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.name}</Card.Title>
            <Card.Entities>
              {shows.map((item) => (
                <Card.Item key={item.id} item={item}>
                  <p>{item.genres[0]}</p>
                  <Card.Image src={item.image.medium} />
                  <Card.Meta>
                    <Card.SubTitle>{item.name}</Card.SubTitle>
                    <Card.Text>
                      {item.summary}
                    </Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>

            </Card.Feature>
          </Card>
        ))}

      </Card.Group>

      <FooterContainer />
    </>
    ) : (
    <SelectProfileContainer user={user} setProfile={setProfile}/>
  );
}
