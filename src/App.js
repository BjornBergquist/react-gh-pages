import React from 'react'
import { NavBar } from './Components/NavBar/NavBar';
import { Routing } from './Routes/Routing';
import './Shared/global/Style.css'


function App() {
  return (
    <Routing>
      <NavBar />
    </Routing>
  );
}

export default App;
