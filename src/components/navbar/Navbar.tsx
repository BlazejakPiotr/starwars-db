import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleMenuVisibility = (prev: boolean) => setIsVisible(!prev);

  return (
    <>
      <Container>
        {!isVisible ? (
          <MdMenu size={32} onClick={() => handleMenuVisibility(isVisible)} />
        ) : (
          <MdClose size={32} onClick={() => handleMenuVisibility(isVisible)} />
        )}
      </Container>
      {isVisible && (
        <MenuCol>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="search">
              <li>Search</li>
            </Link>
            <Link to="favorites">
              <li>Favorites</li>
            </Link>
          </ul>
        </MenuCol>
      )}
    </>
  );
};

const Container = styled.div`
  max-width: 1440px;
  position: relative;
  text-align: end;
  z-index: 3;
  svg {
    color: #ffe919;
  }

  svg:hover {
    cursor: pointer;
  }

  padding: 1rem 1.5rem;
`;

const MenuCol = styled.div`
  position: absolute;
  min-width: calc(92vw - 1440px);
  padding-top: 68px;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #353535;
  z-index: 2;
  ul {
    width: 100%;
    padding: 1rem;
  }
  ul li {
    padding: 0.75rem 2rem;
    font-size: 26px;
  }
`;
