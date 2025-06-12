
export default function Search({searchTerm, setSearchTerm}) {

  return (
    <>
      <input type="text" name="search" id="search" className="form-control" placeholder="Search movie..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    </>
  );
}
