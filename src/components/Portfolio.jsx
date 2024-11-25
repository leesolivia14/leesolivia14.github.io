import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import '../App.css'

function Portfolio () {
    return (
        <div className="projects-flex">
            <div className="projects-grid">
                {portfolio.map(project => (
                    <PortfolioItem 
                        imgUrl={project.imgUrl}
                        title={project.title}
                        description={project.description}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;