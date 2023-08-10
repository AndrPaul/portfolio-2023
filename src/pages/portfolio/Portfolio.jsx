import React from "react";
import "./portfolio.scss";
import Card from "../../components/card/Card";
import gamesDataBg from "../../assets/cards/gamesdb.png";
import movieFinder from "../../assets/cards/moviefinder.png";
import starWars from "../../assets/cards/starwars.png";
import shaker from "../../assets/cards/shaker.png";
import jqueryExam from "../../assets/cards/jqueryexam.png";
import collins from "../../assets/cards/collins.png";


const projects = [
  {
    title: "MOVIE FINDER",
    image: movieFinder,
    hrefRep: "https://github.com/AndrPaul/ReactMovieFinder",
    hrefProj: "https://react-movie-finder.vercel.app/",
    cardContent: "JSX, Sass, React",
  },
  {
    title: "GAMES DB",
    image: gamesDataBg,
    hrefRep: "https://github.com/AndrPaul/GameDatabase",
    hrefProj: "https://andrpaul.github.io/GameDatabase/",
    cardContent: "HTML, CSS, Javascript",
  },
  {
    title: "STARWARS GAME",
    image: starWars,
    hrefRep: "https://github.com/AndrPaul/Starwars-minigame",
    hrefProj: "https://andrpaul.github.io/Starwars-minigame/",
    cardContent: "HTML, CSS, Javascript",
  },
  {
    title: "COCKTAIL SHAKER",
    image: shaker,
    hrefRep: "https://github.com/AndrPaul/Cocktail",
    hrefProj: "https://andrpaul.github.io/Cocktail/",
    cardContent: "Bootstrap, CSS, Javascript",
  },
  {
    title: "JQUERY EXAM",
    image: jqueryExam,
    hrefRep: "https://github.com/AndrPaul/jqueryexam",
    hrefProj: "https://andrpaul.github.io/jqueryexam/",
    cardContent: "HTML, CSS, jQuery",
  },
  {
    title: "COLLINS",
    image: collins,
    hrefRep: "https://github.com/AndrPaul/collins",
    hrefProj: "https://andrpaul.github.io/collins/",
    cardContent: "HTML, CSS, jQuery",
  },
];

function Portfolio() {
  return (
    <div className="portfolio page">
      <div className="heading">
        <h1>Portfolio</h1>
      </div>
      <div className="card-containers section">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            image={project.image}
            hrefRep={project.hrefRep}
            hrefProj={project.hrefProj}
            cardContent={project.cardContent}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;