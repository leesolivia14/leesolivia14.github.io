import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import './App.css'
import Navbar from './components/Navbar';

function App() {
	// Holographic effect from https://dev.to/annlin/holographic-effect-on-web-39bc
	useEffect(() => {
		const holographicElement = document.getElementById("holographic");
	
		function updateHolographicBackground(value) {
		  const percentage = value * 100;
		  holographicElement.style.backgroundPosition = `${percentage}%`;
		}
	
		function handleMouseMove(event) {
		  const x = event.clientX;
		  const width = document.documentElement.clientWidth;
		  const value = x / width;
		  updateHolographicBackground(value);
		}
	
		function handleDeviceOrientation(event) {
		  const z = Math.abs(event.alpha); // rotation degrees from 0 to 360
		  const value = z / 360;
		  updateHolographicBackground(value);
		}
	
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("deviceorientation", handleDeviceOrientation, true);
	
		return () => {
		  window.removeEventListener("mousemove", handleMouseMove);
		  window.removeEventListener("deviceorientation", handleDeviceOrientation);
		};
	  }, []);
  return (
	<>
		<div className="App">
			<div id="holographic">
				{/* <div class="main-title">
					<h1>Hello 👋 <br/>It's Olivia</h1>
				</div> */}
					<Navbar />
				<div className="grid-container">
					<div id="intro"><Intro /></div>
				<div id="projects"><Portfolio /></div>
					
					
				</div>
				<div className="footer">
					<Footer />
				</div>
				
			</div>
		</div>
	 </>
  )
}

export default App