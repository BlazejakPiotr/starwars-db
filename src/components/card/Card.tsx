import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Symbol } from "../../assets/images/symbol.svg";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export const Card = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleShowDetails = (prev: boolean) => setShowDetails(!prev);

  const CardDetailsSide = () => (
    <DetailsContainer>
      <div className="top-card">
        Male
        <MdOutlineFavoriteBorder size={26} color="#f0f0f0" />
      </div>
      <h2>Owen Lars</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <span>
          <span>Eye:</span>
          <p>178cm</p>
          <span>Hair:</span>
          <p>120kg</p>
          <span>Skin:</span>
          <p>2000</p>
        </span>
        <span>
          <span>Height:</span>
          <p>178cm</p>
          <span>Weight:</span>
          <p>120kg</p>
          <span>Birth:</span>
          <p>2000</p>
        </span>
      </div>
      <div>
        <span>Movies:</span>
        <ul>
          <li>- A New Hope</li>
          <li>- Revenge of the Sith</li>
        </ul>
      </div>
    </DetailsContainer>
  );

  return (
    <Container onClick={() => handleShowDetails(showDetails)}>
      {showDetails ? <CardDetailsSide /> : <Symbol fill="#a3a194" />}
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  width: 240px;
  height: 320px;
  padding: 0.75rem;
  background-color: #353535;
  border: 6px solid #dfdfdf;
  border-radius: 12px;
  display: flex;
`;

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
  div,
  span {
    margin: 0;
  }
  .top-card {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    svg {
      margin: 0;
    }
  }

  h2 {
    text-align: center;
    font-weight: 700;
  }
  p {
    text-align: start;
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-weight: 400;
  }
  span {
    font-weight: 200;
    font-size: 14px;
  }
`;
