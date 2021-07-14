import React  from "react";

const GameOver = ({ onReset }) => {
    return (
      <section className="board-game-over">
        <h1 className="title"> ¡Juego terminado!</h1>
        <button className="btn" onClick={onReset}>
          Jugar nuevamente
        </button>
      </section>
    );
  };
  
  export default GameOver;
  