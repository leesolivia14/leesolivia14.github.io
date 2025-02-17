import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import '../App.css'

function Portfolio () {
    return (
        <div className="projects-grid">

                {portfolio.map((project, index) => (
                <div className="project-item" key={index}>
                    <PortfolioItem 
                        imgUrl={project.imgUrl}
                        videoUrl={project.videoUrl}
                        title={project.title}
                        description={project.description}
                        extra={project.extra}
                        stack={project.stack}
                        link={project.link}
                    />
                </div>
                ))}

        </div>
    )
}

export default Portfolio;