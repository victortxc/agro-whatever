import React from "react";
import {Container, Image, Title} from './styles';

export function Card({title, image}) {
    return(
        <Container>
            <Image image={image} />
            <Title>{title}</Title>
        </Container>
    );
}
