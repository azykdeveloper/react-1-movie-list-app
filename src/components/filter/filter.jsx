export default function Filter({ filter, setFilter }) {
  return (
    <div className="btn-group mt-3">
      <button
        className={`btn ${filter === "all" ? "btn-dark" : "btn-outline-dark"}`}
        onClick={() => setFilter("all")}
      >
        Barcha kinolar
      </button>
      <button
        className={`btn ${
          filter === "favourite" ? "btn-dark" : "btn-outline-dark"
        }`}
        onClick={() => setFilter("favourite")}
      >
        Sevimli kinolar
      </button>
      <button
        className={`btn ${
          filter === "popular" ? "btn-dark" : "btn-outline-dark"
        }`}
        onClick={() => setFilter("popular")}
      >
        Ko'p ko'rilgan kinolar
      </button>
    </div>
  );
}
