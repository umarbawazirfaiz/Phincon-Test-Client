import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import MyPokemon from "./pages/MyPokemon";
import MyPokemonDetail from "./pages/MyPokemonDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Pokedex />} exact />
        <Route path="my-pokemon" element={<MyPokemon />} />
        <Route path="my-pokemon/:id" element={<MyPokemonDetail />} />
        <Route path="pokemon/:name" element={<Pokemon />} />
      </Routes>
    </>
  );
}

export default App;
