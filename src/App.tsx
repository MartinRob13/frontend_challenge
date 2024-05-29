import React from 'react';
import './App.css';
import { Welcome } from './pages/Welcome';

// "@ts-expect-error"
import { AppTheme } from './theme';

function App() {

  return (
    <AppTheme>
      <h1>MovieBay</h1>
      <br />
      <Welcome />
      
    </AppTheme>
  )
}

export default App
