import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {NormalizeStyles} from './shared/NormalizeStyles';
import {Home} from './screens/Home';
import {Chat} from './screens/Chat';

function App() {
  return (
    <>
    <NormalizeStyles />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
