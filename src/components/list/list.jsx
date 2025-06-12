import "./list.css";

function ListItem({ movie, toggleLike, toggleFavourite, deleteMovie }) {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        movie.favourite && "favourite"
      } ${movie.like && "like"}`}
    >
      <span
        onClick={() => toggleLike(movie.id)}
        className="list-group-item-label fs-5"
      >
        {movie.name}
      </span>

      <div>
        <span className="viewers">
          <i className="fas fa-eye"></i> {movie.viewers}
        </span>
        <button
          className="btn-cookie"
          onClick={() => toggleFavourite(movie.id)}
        >
          <span className="fas fa-cookie"></span>
        </button>
        <button className="btn-trash" onClick={() => deleteMovie(movie.id)}>
          <span className="fas fa-trash"></span>
        </button>
        <span className="fas fa-star"></span>
      </div>
    </li>
  );
}

export default function List({ movies, toggleLike, toggleFavourite, deleteMovie }) {
  return (
    <>
      <div >
        <h5>No data</h5>
      </div>
      <ul className="list-group">
        {movies.map((movie) => (
          <ListItem
            movie={movie}
            toggleLike={toggleLike}
            toggleFavourite={toggleFavourite}
            deleteMovie={deleteMovie}
            key={movie.id}
          />
        ))}
      </ul>
    </>
  );
}
