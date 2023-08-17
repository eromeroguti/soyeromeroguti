import React from "react";
import portfolio from '../data/portfolio';
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
  <div className="flex flex-col bg-green-200/90 md:flex-row item-center justify-center m-32 shadow-lg shadow-slate-700">
    <div className="grid grid-cols-none md:grid-cols2 lg:grid-cols-3 gap-4 p-4 m-auto shadow-2xl shadow-slate-950">
        {portfolio.map(project => (
            <PortfolioItem
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
            />
        ))}
    </div>
    </div>
    );
}

export default Portfolio;
 