import React, {useContext, useState, useEffect} from "react";
import {SelectProfileContainer} from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Header, Loading} from '../components';
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { FooterContainer } from './footer';
import Searchbar from "../components/Searchbar";
import MyPage from "../containers/myPage";

export function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true); 
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);  

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt='logo' />
          </Header.Group>
          <Header.Group>            
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

        <Searchbar />
      </Header>

      <MyPage />
      <FooterContainer />
    </>
    ) : (
    <SelectProfileContainer user={user} setProfile={setProfile}/>
  );
}
