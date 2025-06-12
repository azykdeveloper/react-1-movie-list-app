export default function Form() {
  return (
    <>
      <h4>Yangi kino qo'shish</h4>
      <form className="d-flex gap-2">
          <input
            type="text"
            className="form-control"
            id="movie_name"
            placeholder="Movie name"
          />
          <input
            type="number"
            className="form-control"
            id="count"
            placeholder="Count"
          />
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}
