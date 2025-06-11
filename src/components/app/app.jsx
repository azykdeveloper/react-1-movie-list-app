import Filter from '../filter/filter'
import Form from '../form/form';
import Info from '../info/info'
import List from '../list/list';
import Search from '../search/search'
import './app.css'

export default function App() {
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
            <List />
          </div>

          <div className="box">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}