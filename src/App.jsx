import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import './App.css'

function App() {

  return (
	<>
		<div>
			<div className="flex-container">
				<Intro />
				<Portfolio />
				
			</div>
			<Footer />
		</div>
	 </>
  )
}

export default App