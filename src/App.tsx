import { useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "./components/navbar/Navbar";
import { Favorites, Home, Search } from "./pages";
import { getCharacters } from "./store/charactersSlice";
import { useAppDispatch, useAppSelector } from "./store/store";

function App() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.characters.data);

  const initApp = useCallback(async () => {
    await dispatch(getCharacters(data.next));
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, []);

  return (
    <BrowserRouter>
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
  margin: 0 auto;
  max-width: 1440px;
  padding: 1.5rem;
`;
