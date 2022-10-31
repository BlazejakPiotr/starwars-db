import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Symbol } from "../../assets/images/symbol.svg";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { motion as m } from "framer-motion";
import { Character } from "../../interfaces/Character";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { handleFavorite } from "../../store/charactersSlice";

interface CardProps {
  char: Character;
}

export const Card = ({ char }: CardProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { favorite } = useAppSelector((state) => state.characters);

  const handleShowDetails = (prev: boolean) => setShowDetails(!prev);

  const CardDetailsSide = () => (
    <div style={{ position: "relative", height: "100%" }}>
      <AddToFavorites
        initial={{ rotateY: 180, opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, type: "tween" }}
      >
        {favorite.some((element) => element.url === char.url) ? (
          <MdOutlineFavorite
            size={32}
            color="#ffe919"
            onClick={() => dispatch(handleFavorite(char))}
          />
        ) : (
          <MdOutlineFavoriteBorder
            size={32}
            color="#f0f0f0"
            onClick={() => dispatch(handleFavorite(char))}
          />
        )}
      </AddToFavorites>

      <div
        style={{ width: "100%", height: "100%", margin: "2rem 0" }}
        onClick={() => handleShowDetails(showDetails)}
      >
        <DetailsContainer
          initial={{ rotateY: -180, opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, type: "tween" }}
        >
          <h3>{char.name}</h3>
          <p style={{ textAlign: "center" }}>{char.gender}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "100%",
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
      </div>
    </div>
  );

  return (
    <Container
      initial={{ rotateY: 0, opacity: 0 }}
      animate={{ rotateY: showDetails ? 180 : 0, opacity: 1 }}
      transition={{ duration: 0.7, type: "twin" }}
      whileHover={{
        scale: 1.1,
        backgroundColor: "#3b372e",
        transition: { duration: 0.4, type: "twin" },
      }}
    >
      {showDetails ? (
        <CardDetailsSide />
      ) : (
        <m.div
          onClick={() => handleShowDetails(showDetails)}
          initial={{ opacity: 0 }}
          animate={{ rotateY: showDetails ? -180 : 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, type: "twin" }}
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
  background-color: #343636;
  border: 6px solid #dfdfdf;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 0;
  flex: 1 1 80%;
  height: 320px;
  cursor: pointer;

  @media (min-width: 576px) and (max-width: 768px) {
    flex: 1 1 30%;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    flex: 1 1 20%;
  }
  @media (min-width: 992px) {
    flex: 1 1 17%;
  }
  svg.card-symbol {
    padding: 0.75rem;
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

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
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
`;
