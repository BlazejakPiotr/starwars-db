import React from "react";
import { Card } from "../../components/card/Card";
import { CardsContainer, Container } from "../home-page/Home";
import { useAppSelector } from "../../store/store";
import { Link } from "react-router-dom";

export const Favorites = () => {
  const { favorite } = useAppSelector((state) => state.characters);

  return (
    <Container>
      <div>
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: 30,
          }}
        >
          Home
        </Link>
      </div>
      <CardsContainer>
        {favorite ? (
          favorite.map((item) => <Card char={item} key={item.url} />)
        ) : (
          <div>No favorites :(</div>
        )}
      </CardsContainer>
    </Container>
  );
};
