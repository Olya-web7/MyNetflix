import React from "react";
import { Feature, OptForm } from '../components';
import {JumbotronContainer} from "../containers/jumbotron";
import {FooterContainer} from "../containers/footer";
import {HeaderContainer} from "../containers/header";

export default function Home() {
    return <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                <Feature.SubTitle>Watch anywhere.</Feature.SubTitle>
                <OptForm>
                    <OptForm.Break />
                    <OptForm.Text>Ready to watch?</OptForm.Text>
                </OptForm>
            </Feature>
        </HeaderContainer>
        <JumbotronContainer />
        <FooterContainer />
    </>
}
