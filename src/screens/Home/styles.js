import styled from "styled-components";
import {FontSizes, Colors, FontWeights, BorderRadius, Spaces} from "../../shared/DesignTokens";
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

export const BannerText = styled.h1`
    font-size: ${FontSizes.FIVE};
    text-align: center;
    color: ${Colors.WHITE};
    font-weight: ${FontWeights.BOLD};

    @media (max-width: 768px) { 
        font-size: ${FontSizes.FOUR};
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ChatContainer = styled.div`
  width: 100%;
  background-color: ${Colors.DARK_GREEN};
  display: flex;
  align-items: center;
  justify-content:space-around;
  border-radius: ${BorderRadius.THREE};
  flex-wrap: wrap;
  padding: ${Spaces.ONE};
  cursor:pointer;
`;

export const ChatTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ChatTextTitle = styled.p`
  font-size: ${FontSizes.THREE};
  color: ${Colors.WHITE};
  font-weight: ${FontWeights.BOLD};
  text-align: justify;
`;

export const ChatTextSubTitle = styled.p`
  font-size: ${FontSizes.TWO};
  color: ${Colors.WHITE};
  font-weight: ${FontWeights.REGULAR};
  text-align: justify;
`;

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: ${Spaces.TWO};

`;
