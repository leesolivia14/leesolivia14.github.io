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
                        words={["Hi there! It's Olivia 👋"]}
                        loop={0} // Infinite loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </h1>
               
                <p>
                    I graduated from NYU recently <br/>with a Bachelor's in Computer Science.<br/><br/>
              
                    <div className="learning-interests-container">
                        <div className="learning">
                            I'm currently learning <br/>
                        
                                📱 iOS Development (for fun) <br/> and 
                                 👩‍💻 Kubernetes (at work)<br/><br/>
                            
                         
                        </div>
                        <div className="interests">
                            Besides coding, <br/>I'm also a big fan of<br />
                            
                                🧩 Cubing, <br/>
                                🛹 Skateboarding, <br/>
                                ⚽ Soccer, <br/>
                            
                             🎷 Jazz, <br/>📖 E-ink gadgets, <br/>and ⌨️ Mechanical Keyboards!<br/>
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
                        <a href="https://www.worldcubeassociation.org/persons/2015LEEO01" target="_blank" rel="noopener noreferrer">
                            <img 
                            src="/assets/icons/rubik's-cube.png" 
                            alt="Cubing" 
                            style={{ width: '30px', height: '30px' }} 
                            />
                        </a>
                    </div>
                </p>
            </div>
            

        </div>
    );
}

export default Intro;
