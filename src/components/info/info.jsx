export default function Info({allMovies, favouriteMovies}) {
  return (
    <>
      <h5 className="">Barcha kinolar soni: {allMovies}</h5>
      <h5 className="mb-0">Sevimli kinolar soni: {favouriteMovies}</h5>
    </>
  );
}