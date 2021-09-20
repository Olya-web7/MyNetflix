import React, {useState, useContext} from "react";
import { FirebaseContext} from "../context/firebase";
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import {useHistory} from "react-router-dom";

export default function SignUp() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' ||password === '' || emailAddress === '';

    const handleSignup = (event) => {
        event.preventDefault();

    };

    return (
        <HeaderContainer>
            <Form>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignup} method='POST'>
                    <Form.Input
                        placeholder='First name'
                        value={firstName}
                        onChange={({ target }) => setFirstName(target.value)}
                    />
                    <Form.Input
                      placeholder='Email address'
                      value={emailAddress}
                      onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                      type='password'
                      autoComplete='off'
                      placeholder='Password'
                      value={password}
                      onChange={({ target }) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type='submit'>
                        Sign Up
                    </Form.Submit>

                </Form.Base>
            </Form>
        </HeaderContainer>
    );
}
