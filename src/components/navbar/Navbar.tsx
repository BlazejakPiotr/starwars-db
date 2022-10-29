import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="favorites">Favorites</Link>
      <Link to="search">Search</Link>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffc500;
`;
