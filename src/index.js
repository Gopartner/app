import React from 'react';
import ReactDOM from 'react-dom';
import './myStyle.css';

stateFullCompo(10,9);
function stateFullCompo(a,b){
	let result = a % b;
	return (
		<div className="modulus">
		 {result}
		</div>
	)
}



ReactDOM.render(
  <React.StrictMode>
    <stateFullCompo />
  </React.StrictMode>,
  document.getElementById('root')
);


