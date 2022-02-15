import React from 'react';
import logo from './logo.svg';
import './App.css';
import Students from './components/Students/student';
import Home from './components/Home/home';
import Lotto from "./components/Lotto/lotto";
function App() {
  return (
    <div className="App">
      {/* <Students/> */}
      <Home/>
      <Lotto/>
    </div>
  );
}

export default App;
