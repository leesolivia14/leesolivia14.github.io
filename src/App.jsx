import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import './App.css'
import Navbar from './components/Navbar';

function App() {

  return (
	<>
		<div className="App">
				<Navbar />
			<div className="grid-container">
				<div id="intro"><Intro /></div>
			<div id="projects"><Portfolio /></div>
				
				
			</div>
			<div className="footer">
				<Footer />
			</div>
			
		</div>
	 </>
  )
}

export default App