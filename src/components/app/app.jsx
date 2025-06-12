import { useState } from "react";
import Filter from "../filter/filter";
import Form from "../form/form";
import Info from "../info/info";
import List from "../list/list";
import Search from "../search/search";
import "./app.css";

export default function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Empire of Osman",
      viewers: 889,
      like: false,
      favourite: false,
    },
    {
      id: 2,
      name: "The Shawshank Redemption",
      viewers: 123,
      like: false,
      favourite: false,
    },
    {
      id: 3,
      name: "The Dark Knight",
      viewers: 789,
      like: false,
      favourite: true,
    },
    {
      id: 4,
      name: "The Lord of the Rings",
      viewers: 456,
      like: false,
      favourite: false,
    },
  ]);

  function toggleLike(id) {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, like: !movie.like } : movie
      )
    );
  }

  function toggleFavourite(id) {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, favourite: !movie.favourite } : movie
      )
    );
  }
  
  return (
    <>
      <div id="app">
        <div className="wrapper">
          <div className="box">
            <Info />
          </div>

          <div className="box">
            <Search />
            <Filter />
          </div>

          <div className="box">
            <List
              movies={movies}
              toggleLike={toggleLike}
              toggleFavourite={toggleFavourite}
            />
          </div>

          <div className="box">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
