import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { CharacterCount } from './components/CharacterCount';
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Home />
        <CharacterCount />
      </RecoilRoot>
    </div>
  );
}

export default App;
