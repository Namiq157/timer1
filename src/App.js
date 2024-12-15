import './App.css';
import {Routes , Route , NavLink } from "react-router-dom"
import Timer from './Components/Timer';
import Stopwatch from './Components/Stopwatch';
import Clock from './Components/Clock';
function App() {
  return (
    <div className="app">
      <NavLink to= "/timer" >Timer</NavLink>
      <NavLink to= "/clock" >Clock</NavLink>
      <NavLink to= "/minute" >Minute</NavLink>
      <Routes>
        <Route path='/timer' element = {<Timer />}> </Route>
        <Route path='/minute' element = {<Stopwatch />}> </Route>
        <Route path='/clock' element = {<Clock />}> </Route>
      </Routes>

    </div>
  );
}

export default App;