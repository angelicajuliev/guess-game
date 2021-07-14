import React  from "react";

const Score = (props) => {
    const { lives, score } = props;
  
    return (
      <article className="score">
        <h3>Vidas: {lives}</h3>
        <h3>Puntos: {score}</h3>
      </article>
    );
  };
  
  export default Score;
  