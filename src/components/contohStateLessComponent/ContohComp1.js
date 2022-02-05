import React from "react";

// 3 Cara membuat component:
// 1. Function declaration
// 2. Function expression
// 3. Arrow function(recomended)
function Header(props) {
  return (
    <div>
      <h1>Contoh StateLess Component</h1>
      <p className="stateLess">{props.data}</p>
    </div>
  )
}

export default Header;
