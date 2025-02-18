import React from 'react';
import '../App.css';
import { Typewriter } from 'react-simple-typewriter';


function Intro() {
    return (
        <div className="intro-container">
            {/* Intro Text */}
            <div className="intro">
                
                <h1>
                    <Typewriter
                        words={["Hi there! It's Olivia 👋."]}
                        loop={0} // Infinite loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </h1>

                <p>
                    I graduated from NYU recently with a Bachelor's in Computer Science.
              
                    <div className="learning-interests-container">
                        <div className="learning">
                            <h3>I'm currently learning...</h3>
                            <p>📱 iOS Development (for fun), Kubernetes and Terraform (at work)</p>
                        </div>
                        <div className="interests">
                            <h3>Besides coding, I'm also a big fan of...</h3>
                            <p>🧩 Cubing, 🛹 Skateboarding, ⚽ Soccer, 🎷 Jazz, 📖 E-ink gadgets, ⌨️ Mechanical Keyboards</p>
                        </div>
                    </div>
                    
                    
                    <h3>Let's connect!</h3>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/leeoliviasol" target="_blank" rel="noopener noreferrer">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a href="https://github.com/leesolivia14" target="_blank" rel="noopener noreferrer">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </div>
                </p>
            </div>
            

        </div>
    );
}

export default Intro;
