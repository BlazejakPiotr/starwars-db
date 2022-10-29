import React from "react";
import styled from "styled-components";
import { ReactComponent as StarWarsLogo } from "../../assets/images/Star_Wars_Logo.svg";
import { Card } from "../../components/card/Card";

export const Home = () => {
  return (
    <Container>
      <LogoContainer>
        <StarWarsLogo fill="#f0f0f0" />
        <h1>characters</h1>
      </LogoContainer>
      <CardsContainer>
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
      </CardsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  margin-bottom: 3rem;
  flex: 1 25%;
  text-align: center;
  max-width: 500px;
  width: 100%;
  h1 {
    font-family: "Starjhol";
    font-size: 3em;
    color: #ffe919;
  }
`;

const CardsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex: 2 75%;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  > * {
    flex-basis: 1;
  }
`;
