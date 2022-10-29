import { useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "./components/navbar/Navbar";
import { Favorites, Home, Search } from "./pages";
import { getCharacters } from "./store/charactersSlice";
import { useAppDispatch } from "./store/store";

function App() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getCharacters());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 1.5rem;
  max-width: 1440px;
`;
