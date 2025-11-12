import NavBar from './Components/NavBar';
import SubNavBar from './Components/SubNavBar';
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <NavBar></NavBar>
      <SubNavBar></SubNavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;