import styled from "styled-components";
import {FontSizes, Colors, FontWeights, BorderRadius, Spaces} from "../../shared/DesignTokens";

export const Form = styled.form`
    width: 50%;
    min-width: 350px;
    display: flex;
    flex-direction: column;
    margin-bottom: ${Spaces.THREE};
`;

export const Input = styled.input`
    width: 100%;
    min-width: 250px;
    padding: ${Spaces.ONE};
    border: 1px solid ${Colors.LIGHT_GREEN};
    border-radius: ${BorderRadius.TWO};
    margin-bottom: ${Spaces.TWO};
`;

export const InputMessage = styled.textarea`
    height: 250px;
    width: 100%;
    min-width: 250px;
    padding: ${Spaces.ONE};
    border: 1px solid ${Colors.LIGHT_GREEN};
    border-radius: ${BorderRadius.TWO};
    margin-bottom: ${Spaces.TWO};
`;

export const Label = styled.label`
    font-size: ${FontSizes.TWO};
    font-weight: ${FontWeights.THIN};
`;

export const Button = styled.button`
    background-color: ${Colors.DARK_GREEN};
    color: ${Colors.WHITE};
    font-size: ${FontSizes.TWO_HALF};
    padding: ${Spaces.ONE};
    border-radius: ${BorderRadius.THREE};
`;

export const ErrorSpan = styled.span`
    color: ${Colors.RED};
    margin-bottom: ${Spaces.ONE};
    font-size: ${FontSizes.ONE_HALF}
`;
