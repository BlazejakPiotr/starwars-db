import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Symbol } from "../../assets/images/symbol.svg";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { motion as m } from "framer-motion";

export const Card = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleShowDetails = (prev: boolean) => setShowDetails(!prev);

  const CardDetailsSide = () => (
    <DetailsContainer
      initial={{ rotateY: -180, opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, type: "tween" }}
      exit={{ opacity: 0 }}
    >
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
    <Container
      onClick={() => handleShowDetails(showDetails)}
      initial={{ rotateY: 0, opacity: 0 }}
      animate={{ rotateY: showDetails ? 180 : 0, opacity: 1 }}
      transition={{ duration: 1, type: "tween" }}
      exit={{ opacity: 0 }}
    >
      {showDetails ? (
        <CardDetailsSide />
      ) : (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ rotateY: showDetails ? -180 : 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, type: "tween" }}
          exit={{ opacity: 0 }}
        >
          <AddToFavorites>
            <MdOutlineFavoriteBorder
              size={32}
              color="#f0f0f0"
              style={{ margin: 0 }}
            />
          </AddToFavorites>
          <h2>owen lars</h2>
          <Symbol fill="#7c7c7c75" className="card-symbol" />
        </m.div>
      )}
    </Container>
  );
};

const Container = styled(m.div)`
  position: relative;
  padding: 0.75rem;
  width: 230px;
  height: 260px;
  background-color: #444c4c;
  border: 6px solid #dfdfdf;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    text-align: center;
    font-family: "Stjldbl1";
    letter-spacing: 1.5pt;
    z-index: 1;
  }

  svg.card-symbol {
    padding: 0.75rem;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }
`;

const DetailsContainer = styled(m.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  div,
  span {
    margin: 0;
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

const AddToFavorites = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
