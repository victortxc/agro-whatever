import styled from "styled-components";
import {Spaces, FontSizes, Colors, FontWeights} from "../../shared/DesignTokens";

export const Container = styled.div`
    width: 100%;
    padding: ${Spaces.THREE};
`;

export const Title = styled.h2`
    font-size: ${FontSizes.FOUR};
    font-weight: ${FontWeights.THIN};
    color: ${Colors.DARK_GREEN}
`;

export const Line = styled.hr`
    margin-top: ${Spaces.TWO};
    border: 0.1px solid ${Colors.LIGHT_GREEN};
`;
