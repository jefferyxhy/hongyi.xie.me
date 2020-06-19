import React from 'react';
import './App.css';
import About from './components/About';
import Introduction from './components/Introduction';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <div id="colorlib-page">
        <div id="container-wrap">
          <SideBar></SideBar>
				<div id="colorlib-main">
					<Introduction></Introduction>
          <About></About>
					{/*
					<Timeline></Timeline> */}
          	</div>
      	</div>
      </div>

    </div>
  );
}

export default App;
