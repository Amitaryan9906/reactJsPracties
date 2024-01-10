import './App.css';

import React from 'react';
import {Greet} from './components/Greet';
import { Welcome } from './components/Welcome';
import {HelloMessage} from './components/Hello';

function App() {
  return (
    <div className="App">
    <Greet/>
    <Welcome/>
    <HelloMessage/>
    </div>
  );
}

export default App;
