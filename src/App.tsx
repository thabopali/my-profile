import React from 'react'
import './App.css'
import { Button } from '@material-ui/core'
import Header from './components/Header'
import Movies from './components/Movies'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Button variant="contained" color="primary">
        <Movies />
	  </Button>
    </div>
  );
}

export default App;
