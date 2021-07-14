import React  from "react";

const GameWon = ({ score, onReset }) => {
    return (
      <section className="board-game-over">
        <h1 className="title">
          ¡Felicitaciones, Ganaste <b>{score}</b> puntos!
        </h1>
        <button className="btn" onClick={onReset}>
          Jugar nuevamente
        </button>
      </section>
    );
  };
  
  export default GameWon;
  