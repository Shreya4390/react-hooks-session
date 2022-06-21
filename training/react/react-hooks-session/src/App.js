import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './component/Welcome'
import Reducer from './component/ReducerComponent';
import State from './component/StateComponent';
import Effect from './component/EffectComponent';
import Ref from  './component/RefComponent';
import Callback from './component/useCallback/ParentComponent';
import UniqueId from './component/UseId'

function App() {
  return (
    <div className="container bg-gradient">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/state" element={<State />} />
          <Route path="/effect" element={<Effect />} />
          <Route path="/reducer" element={<Reducer />} />
          <Route path="/ref" element={<Ref />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/unique-id" element={<UniqueId />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
