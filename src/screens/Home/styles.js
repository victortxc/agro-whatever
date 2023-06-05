import styled from "styled-components";
import {Spaces, FontSizes, Colors, FontWeights} from "../../shared/DesignTokens";
import head from '../../assets/Head.png';

export const BannerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${head});
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 768px) { 
        height: 250px;
  }
`;

export const BannerText = styled.p`
    font-size: ${FontSizes.FIVE};
    text-align: center;
    color: ${Colors.WHITE};
    font-weight: ${FontWeights.BOLD};

    @media (max-width: 768px) { 
        font-size: ${FontSizes.FOUR};
  }
`;
