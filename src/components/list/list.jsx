import "./list.css";

export default function List() {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span className="list-group-item-label">Empire of Osman</span>

          <div>
            <input
              type="number"
              className="list-group-item-input me-2"
            />
            <button className="btn-cookie">
              <span class="fas fa-cookie"></span>
            </button>
            <button className="btn-trash">
              <span class="fas fa-trash"></span>
            </button>
            <span class="fas fa-star"></span>
          </div>
        </li>
        
      </ul>
    </>
  );
}
