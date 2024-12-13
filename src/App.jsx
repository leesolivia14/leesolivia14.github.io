import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import './App.css'

function App() {

  return (
	<>
		<div className="stars">
			<div className="grid-container">
				<Intro />
				
				<Portfolio />
				
			</div>
			<div class="footer">
				<Footer />
			</div>
			
		</div>
	 </>
  )
}

export default App