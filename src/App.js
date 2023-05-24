import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StateBasics from './components/StateBasics';
import Tttable from './components/Tttable';
import First from './components/First';
import Navbar from './components/Navbar';
import ApiGet from './components/ApiGet';


function App() {
  return (
    <div className="App">
      <Navbar/><br />br

      <Routes>
        <Route path='/' element={<StateBasics/>}/>
        <Route path='/First' element={<First/>}/>
        <Route path='/Tttable' element={<Tttable/>}/>
        <Route path='/axios' element={<ApiGet/>}/>
        
      </Routes>
     
    </div>
  );
}

export default App;
