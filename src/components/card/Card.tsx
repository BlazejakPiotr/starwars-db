import React from "react";
import styled from "styled-components";
import { ReactComponent as Symbol } from "../../assets/images/symbol.svg";

export const Card = () => {
  return (
    <Container className="card">
      <Symbol fill="#66634c" />
      <h3>Name</h3>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  width: 170px;
  padding: 1rem;
  background-color: #000;
  border: 6px solid #fff;
  border-radius: 12px;
  text-align: center;
  font-family: "Starjhol";
`;
