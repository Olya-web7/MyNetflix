import React, {useContext, useState, useEffect} from "react";
import {SelectProfileContainer} from "./profiles";
import { FirebaseContext } from "../context/firebase";
import {Card, Header, Loading} from '../components';
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import axios from "axios";
import { FooterContainer } from './footer';

export function BrowseContainer() {

  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/shows')
      .then(res => {
        console.log(res.data)
        setShows(res.data)
      })
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

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
          <Card.Entities>
            {shows.map((item) => (
              <div key={item.id}>
                <Card.Image src={item.image.medium} alt={item.name}/>
              </div>
            ))}
          </Card.Entities>
      </Card.Group>
      <FooterContainer />
    </>
    ) : (
    <SelectProfileContainer user={user} setProfile={setProfile}/>
  );
}
