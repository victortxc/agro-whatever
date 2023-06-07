import React, {useState} from "react";
import { Header } from "../../components/Header";
import { ContentContainer } from "../../components/ContentContainer";
import {
  ChatContainer,
  ChatMessageContainer,
  Form,
  MessageInput,
  MessageContainer,
  Message
} from "./styles";
import { IoSendSharp } from "react-icons/io5";
import { Colors } from "../../shared/DesignTokens";
import { useFormik } from "formik";
import * as Yup from "yup";

export function Chat() {
  const [messages, setMessages] = useState([
    {
      message: 'How to plant alecrim?',
      isFromUser: true
    },
    {
      message: 'Choose a Sunny Location: Alecrim needs direct sunlight, so select a location with good sun exposure.Prepare the soil: Make sure the soil drains well and add organic matter to improve soil quality. Plant the cuttings: Cut a cutting about four inches long from a healthy plant and plant it in the prepared soil. Water moderately and keep the soil moist until the roots become established.',
      isFromUser: false
    },
  ]);

  const Schema = Yup.object().shape({
    message: Yup.string().required("Campo obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: (values) => {
      setMessages((currentState) => ( [...currentState, {message: formik.values.message, isFromUser: true}] ));
      formik.resetForm();
    },
    validationSchema: Schema,
  });

  return (
    <>
      <Header />
      <ContentContainer title="Chat">
        <ChatContainer>
          {messages.map((data) => (
             <ChatMessageContainer isFromUser={data.isFromUser}>
            <MessageContainer isFromUser={data.isFromUser}>
              <Message>{data.message}</Message>
            </MessageContainer>
            </ChatMessageContainer>
          ))}
        </ChatContainer>
          <Form onSubmit={formik.handleSubmit}>
            <MessageInput
              type="text"
              id="message"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            <IoSendSharp
              size={30}
              color={Colors.DARK_GREEN}
              style={{ marginLeft: "10px", cursor: 'pointer' }}
              onClick={formik.handleSubmit}
            />
            </Form>
      </ContentContainer>
    </>
  );
}
