import React from "react";
import {Container, Title, Line} from './styles';

export function ContentContainer({title, children}) {
    return(
        <Container>
            <Title>{title}</Title>
            <Line />
            {children}
        </Container>
    );
}
