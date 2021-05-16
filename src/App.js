import './App.css';
const app = require('./server');
const Header = require('./Header');
// import React, { Component, setState, useState } from 'react';
// import React, { Component } from 'react'


console.log(Header);

// (async()=>{
//   console.log(app);
// })()

// console.log('----------------');
// console.log(app);



function App() {


  return (

    <div className="App">

      <div style={{backgroundColor:"white", padding:'5px', marginBottom:'5px'}}>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                </li>
                </ul>
        </div>






      <div className='container'>

      {[1,2,3,4,5,6].map((image, key) => {
          return(
            <div className="card" style={{width:'18rem'}}>
            <img src="https://www.saiacomarte.com/wp-content/uploads/2017/08/monalisa.jpg" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          )
      })}

      </div>
          
    </div>
  );


}

export default App;
