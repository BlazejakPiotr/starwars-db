import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Symbol } from "../../assets/images/symbol.svg";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { motion as m } from "framer-motion";
import { Character } from "../../interfaces/Character";

interface CardProps {
  char: Character;
}

export const Card = ({ char }: CardProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleShowDetails = (prev: boolean) => setShowDetails(!prev);

  const CardDetailsSide = () => (
    <DetailsContainer
      initial={{ rotateY: -180, opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, type: "tween" }}
    >
      <AddToFavorites>
        <MdOutlineFavoriteBorder
          size={32}
          color="#f0f0f0"
          style={{ margin: 0 }}
        />
      </AddToFavorites>

      <h3>{char.name}</h3>
      <p style={{ textAlign: "center" }}>{char.gender}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <span>
          <span>Eye:</span>
          <p>{char.eye_color}</p>
          <span>Hair:</span>
          <p>{char.hair_color}</p>
          <span>Skin:</span>
          <p>{char.skin_color}</p>
        </span>
        <span>
          <span>Height:</span>
          <p>{char.height}</p>
          <span>Weight:</span>
          <p>{char.mass}</p>
          <span>Birth:</span>
          <p>{char.birth_year}</p>
        </span>
      </div>
    </DetailsContainer>
  );

  return (
    <Container
      onClick={() => handleShowDetails(showDetails)}
      initial={{ rotateY: 0, opacity: 0 }}
      animate={{ rotateY: showDetails ? 180 : 0, opacity: 1 }}
      exit={{ rotateY: 0, opacity: 0 }}
      transition={{ duration: 1, type: "tween" }}
    >
      {showDetails ? (
        <CardDetailsSide />
      ) : (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ rotateY: showDetails ? -180 : 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, type: "tween" }}
          exit={{ opacity: 0 }}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            zIndex: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <h2 style={{ textAlign: "center" }}>{char.name}</h2>

          <Symbol fill="#666355" className="card-symbol" />
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
  background-color: #343636;
  border: 6px solid #dfdfdf;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  svg.card-symbol {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
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

const AddToFavorites = styled(m.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin: 0;
`;
