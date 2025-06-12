import { useState } from "react";
import Filter from "../filter/filter";
import Form from "../form/form";
import Info from "../info/info";
import List from "../list/list";
import Search from "../search/search";
import "./app.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Empire of Osman",
      viewers: 889,
      like: true,
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
      like: true,
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

  const searchMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function applyFilter(movies, filter) {
    switch (filter) {
      case "favourite":
        return movies.filter((movie) => movie.favourite);
      case "popular":
        return movies.filter((movie) => movie.viewers > 500);
      default:
        return movies;
    }
  }

  const filteredMovies = applyFilter(searchMovies, filter);

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

  function addMovie(name, viewers) {
    const newMovie = {
      id: Date.now(), // unikal id
      name,
      viewers: parseInt(viewers),
      like: false,
      favourite: false,
    };

    setMovies([...movies, newMovie]);
  }

  function deleteMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  return (
    <>
      <div id="app">
        <div className="wrapper">
          <div className="box">
            <Info
              allMovies={movies.length}
              favouriteMovies={movies.filter((movie) => movie.favourite).length}
            />
          </div>

          <div className="box">
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Filter filter={filter} setFilter={setFilter} />
          </div>

          <div className="box">
            <List
              movies={filteredMovies}
              toggleLike={toggleLike}
              toggleFavourite={toggleFavourite}
              deleteMovie={deleteMovie}
            />
          </div>

          <div className="box">
            <Form addMovie={addMovie} />
          </div>
        </div>
      </div>
    </>
  );
}
