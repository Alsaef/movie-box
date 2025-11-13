import Home from './Components/Home';
import NavBar from './Components/NavBar';
import SearchMovies from './Components/SearchMovies';
import SubNavBar from './Components/SubNavBar';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <NavBar></NavBar>
      <SubNavBar></SubNavBar>
      <Routes>

        <Route index element={<Home />} />
        <Route path="movies" element={<SearchMovies />} />

      </Routes>
    </div>
  );
};

export default App;