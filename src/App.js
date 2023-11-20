// App.js
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Tp5 from './Tp5';
import CalcState from './CalcState';
import Slider from './Slider';
import Formtasks from './Formtasks';
import UseEffectTp from './UseEffectTp';
import ThemeContextProvider from './ThemeContext';

import './App.css'

function App() {
  return (
    
      <div className="App">
        <ThemeContextProvider>
          <Tp5 />
        </ThemeContextProvider>
        <Routes>
          <Route path="/CalcState" element={<CalcState />} />
          <Route path="/Slider" element={<Slider />} />
          <Route path="/Formtasks" element={<Formtasks />} />
          <Route path="/UseEffectTp" element={<UseEffectTp />} />
        </Routes>
        
      </div>
    
  );
}

export default App;
