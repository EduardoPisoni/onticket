import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Carroussel from './components/carousel/carroussel';
import Main from './main';
import FooterSite from './components/footer/footerSite';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Carroussel/>
        <Main/>
        <FooterSite/>
      </div>
    );
  }
}

export default App;
