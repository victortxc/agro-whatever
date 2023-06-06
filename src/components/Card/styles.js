import styled from "styled-components";
import {Spaces, FontSizes} from "../../shared/DesignTokens";

export const Container = styled.div`
    width: 25%;
    height: 350px;
    margin-top: ${Spaces.FIVE};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 912px) { 
        width: 100%;
        height: 500px;
  }
`;

export const Image = styled.div`
    background-image: url(${(props) => props.image});
    width: 100%;
    height: 100%;
    background-size: cover;
`;

export const Title = styled.p`
    font-size: ${FontSizes.THREE};
    margin-top: ${Spaces.ONE};
    text-align: center;

    @media (max-width: 912px) { 
        font-size: ${FontSizes.FOUR};
  }
`;
