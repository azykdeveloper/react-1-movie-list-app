export default function Form() {
  return (
    <>
      <h4>Yangi kino qo'shish</h4>
      <form className="d-flex gap-2">
          <input
            type="text"
            class="form-control"
            id="movie_name"
            placeholder="Movie name"
          />
          <input
            type="number"
            class="form-control"
            id="count"
            placeholder="Count"
          />
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}
