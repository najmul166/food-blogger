import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Foodreviewer from './components/foodreviewer/Foodreviewer';
import { waitForElementToBeRemoved } from '@testing-library/dom';
import Header from './components/Header/Header';

function App() {
  
  
  return (
    <div className="App">
      <Header></Header>
      <Foodreviewer></Foodreviewer>
      
    </div>
  );
}


export default App;
