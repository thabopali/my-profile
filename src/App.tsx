import React from 'react'
import './App.css'
import { Button } from '@material-ui/core'
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <div className="App">
		<Header />
      <Button variant="contained" color="primary">
		  Hello World
	  </Button>
    </div>
  );
}

export default App;
