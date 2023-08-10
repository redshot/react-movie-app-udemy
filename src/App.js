import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className='app-component-container'>
      <Search />
      <MovieList />
    </div>
  );
}

export default App;