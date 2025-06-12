import { useState } from "react";

export default function Form({addMovie}) {
  const [name, setName] = useState("");
  const [viewers, setViewers] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() && viewers) {
      addMovie(name, viewers);
      setName("");
      setViewers("");
    }
  }
  return (
    <>
      <h4>Yangi kino qo'shish</h4>
      <form className="d-flex gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          id="movie_name"
          placeholder="Movie name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="form-control"
          id="viewers"
          placeholder="Viewers"
          value={viewers}
          onChange={(e) => setViewers(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </>
  );
}
