import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import MovieList from './components/MovieList';
import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

function App() {
  const {movieList} = useContext(GlobalContext); // destructure variable from context

  return (
    //<div className='app-component-container' style={{background : movieList && movieList.length > 0 && "blue"}}>
    <div className='app-component-container'>
      <Search />
      <MovieList />
    </div>
  );
}

export default App;