import React from 'react';

function PortfolioItem({ title, imgUrl, videoUrl, description, extra, stack, link }) {
    return (
        <div>
            {/* Title as a hyperlink */}
            <div className="project-link">
            <h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </h3>
            </div>
            <div className="content">
                <p className="description">{description}</p>
                <b>{extra && <p className="extra-text">{extra}</p>}</b>
                <br/>

                {/* Stack container remains at the bottom */}
                <p className="stack-container">
                    {stack.map((item, index) => (
                        <span key={index} className="stack-item">
                            {item}
                        </span>
                    ))}
                </p>
            </div>


            {videoUrl ? (
                <div className="video-container">
                    <iframe 
                        width="560" 
                        height="315" 
                        src={videoUrl} 
                        title={title} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                    ></iframe>
                </div>
            ) : (
                imgUrl && <img src={imgUrl} alt={title} />
            )}

        </div>
    );
}


export default PortfolioItem;