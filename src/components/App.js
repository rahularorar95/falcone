import React, { Component } from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import PlanetList from './PlanetList/PlanetList'
import VehicleList from './VehicleList/VehicleList'

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <PlanetList />

        
        <VehicleList />
        <Footer />
      </div>
    );
  }
}

export default App;
