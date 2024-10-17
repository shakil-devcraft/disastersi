
import { Outlet } from 'react-router-dom';
import './App.css';
import 'boxicons'
import Navbar from './Components/share/Navbar';
import 'boxicons/css/boxicons.min.css';

function App() {

  return (
    <div className='font-primary'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App;
