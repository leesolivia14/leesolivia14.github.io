import React from 'react';

function PortfolioItem({ title, imgUrl, description, stack, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl dark:text-white mb-2
                md:mb-3 font:semibold">{title}</h3>
                <p>{description}</p>
                <p className="flex flex-wrap gap-2 flex-row
                items-center justify-start text-xs md:text-sm dark:text-white">
                    {stack.map(item => (
                        <span>
                            {item}
                        </span>
                    ))}
                </p>

            </div>
        </a>
    )
}

export default PortfolioItem;