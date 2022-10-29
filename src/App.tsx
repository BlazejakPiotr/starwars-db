import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Favorites, Home, Search } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
