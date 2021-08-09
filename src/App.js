import React, { Fragment } from 'react'
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { NavBar } from './Components/NavBar/NavBar';
import { Routing } from './Routes/Routing';
import './Shared/global/Style.css'


function App() {
  return (
    <Fragment>
      <Header>
        <NavBar />
      </Header>
      <main>
        <Routing />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
