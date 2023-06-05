import React from "react";
import { Header } from "../../components/Header";
import {BannerContainer,BannerText } from './styles';

export function Home() {
    return(
        <>
        <Header />
        <BannerContainer>
            <BannerText>Agriculture for those <br /> without space </BannerText>
        </BannerContainer>
        </>
    );
}
