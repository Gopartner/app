import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Coba extends Component {
	render(){
		return <>
			<h1></h1>
			</>
	}
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          G.O.S COMMUNITY
        </p>
        <a
          className="App-link"
          href="https://gopartner.github.io/app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
	  <Coba/>
      </header>
    </div>
  );
}

export default App;
