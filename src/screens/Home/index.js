import React from "react";
import { Header } from "../../components/Header";
import {
  BannerContainer,
  BannerText,
  CardContainer,
  ChatContainer,
  ChatTextContainer,
  ContactContainer,
  ChatTextTitle,
  ChatTextSubTitle,
} from "./styles";
import { ContentContainer } from "../../components/ContentContainer";
import { Card } from "../../components/Card";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import chat from "../../assets/chat.png";
import contact from "../../assets/cuate.png";
import { IoSendSharp } from "react-icons/io5";
import { Colors } from "../../shared/DesignTokens";
import { useNavigate } from "react-router-dom";
import { ContactForm } from "../../components/contactForm";

export function Home() {
  const navigate = useNavigate();

  function navigateToChatPage() {
    navigate("/chat");
  }

  return (
    <>
      <Header />
      <BannerContainer>
        <BannerText>
          Agriculture for those <br /> without space{" "}
        </BannerText>
      </BannerContainer>
      <ContentContainer title="Blog">
        <CardContainer>
          <Card title="What plants to grow at home?" image={blog01} />
          <Card title="How to prepare the land for planting?" image={blog02} />
          <Card title="How to prepare the seeds for planting?" image={blog03} />
        </CardContainer>
      </ContentContainer>
      <ContentContainer title="Chat">
        <ChatContainer onClick={navigateToChatPage}>
          <img alt="chat" src={chat} width={250} />
          <ChatTextContainer>
            <div>
              <ChatTextTitle>Find answers to your questions</ChatTextTitle>
              <ChatTextSubTitle>
                and learn how to grow your plants at home
              </ChatTextSubTitle>
            </div>
            <IoSendSharp
              size={30}
              color={Colors.LIGHT_GREEN}
              style={{ marginLeft: "30px" }}
            />
          </ChatTextContainer>
        </ChatContainer>
      </ContentContainer>
      <ContentContainer title="Contact">
        <ContactContainer>
          <ContactForm />
          <img alt="chat" src={contact} width={300} />
        </ContactContainer>
      </ContentContainer>
    </>
  );
}
