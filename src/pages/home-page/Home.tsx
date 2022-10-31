import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as StarWarsLogo } from "../../assets/images/Star_Wars_Logo.svg";
import { Card } from "../../components/card/Card";
import { Character } from "../../interfaces/Character";
import { useAppSelector } from "../../store/store";

export const Home = () => {
  const { data } = useAppSelector((state) => state.characters);

  return (
    <Container>
      <div>
        <Link
          to="favorites"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          Favorites
        </Link>
      </div>
      <LogoContainer>
        <StarWarsLogo fill="#f0f0f0" />
      </LogoContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
      <CardsContainer>
        {data.results &&
          data.results.map((item: Character) => (
            <Card char={item} key={item.url} />
          ))}
      </CardsContainer>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  margin: 3rem auto;
  flex: 1 25%;
  text-align: center;
  max-width: 500px;
  width: 100%;
  h1 {
    font-family: "Starjhol";
    font-size: 2.8em;
    color: #ffe919;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
