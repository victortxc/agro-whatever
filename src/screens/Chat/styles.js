import styled from "styled-components";
import {Spaces, Colors, BorderRadius} from "../../shared/DesignTokens";

export const ChatContainer = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: ${Spaces.THREE};

  &::-webkit-scrollbar {
    width: 0;
  }

`;

export const ChatMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: ${Spaces.TWO} 0;
    align-items: ${(props) => props.isFromUser ? "end" : 'start'};
`;

export const Form = styled.form`
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: auto;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: ${Spaces.ONE};
    background-color: ${Colors.WHITE};
    justify-content: space-evenly;
`;

export const MessageInput = styled.input`
    width: 90%;
    padding: ${Spaces.ONE_HALF};
    border: 1px solid ${Colors.LIGHT_GREEN};
    border-radius: ${BorderRadius.TWO};
`;

export const MessageContainer = styled.div`
    width: 70%;
    display: flex;
    background-color: ${(props) => props.isFromUser ? Colors.LIGHT_GREEN : Colors.WHITE};
    padding: ${Spaces.ONE_HALF};
    margin-bottom: ${Spaces.TWO};
    border: 1px solid ${Colors.DARK_GREEN};
    border-radius: ${BorderRadius.THREE};
    margin-bottom: ${Spaces.FOUR};
`;

export const Message = styled.p`
    text-align: justify;
`;
