import styled from "styled-components";
import {Spaces, FontSizes, Colors, FontWeights} from "../../shared/DesignTokens";

export const Container = styled.div`
    width: 100%;
    background-color: ${Colors.DARK_GREEN};
    display: flex;
    justify-content: space-between;
    padding: ${Spaces.TWO};
    flex-wrap: wrap;

    @media (max-width: 768px) { 
        justify-content: center;
  }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: ${Spaces.THREE};

    @media (max-width: 768px) { 
        margin: 0;
  }
`;

export const LogoText = styled.p`
    font-size: ${FontSizes.THREE};
    color: ${Colors.WHITE};
    font-weight: ${FontWeights.BOLD};
    margin-left: ${Spaces.ONE};
`;

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 40%;

    @media (max-width: 768px) { 
        width: 100%;
        margin-top: ${Spaces.TWO};
  }
`;

export const MenuItem = styled.a`
    font-size: ${Spaces.TWO};
    text-decoration: none;
    color: ${Colors.WHITE}
`;
