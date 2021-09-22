import React, {useContext, useState, useEffect} from "react";
import {SelectProfileContainer} from "./profiles";
import { FirebaseContext } from "../context/firebase";
import {Card, Header, Loading} from '../components';
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import axios from "axios";

export function BrowseContainer() {

  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/shows')
      .then(res => {
        console.log(res.data)
        setShows(res.data)
      })
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    console.log('profile', profile)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src='joker1' dontShowOnSmallViewPort>
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
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>

          {shows.map((item) => (
            <div key={item.id}>
              <img src={item.image.medium} alt='1'/>
                <p>{item.name}</p>
                <p>{item.rating.average}</p>
            </div>
          ))}

      </Card.Group>
    </>
    ) : (
    <SelectProfileContainer user={user} setProfile={setProfile}/>
  );
}
