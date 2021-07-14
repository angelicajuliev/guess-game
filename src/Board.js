import React, { useState } from "react";
import Score from "./components/Score";
import Title from "./components/Title";
import Emojis from "./components/Emojis";
import FormName from "./components/FormName";
import GameOver from "./components/GameOver";
import GameWon from "./components/GameWon";
import "./styles.css";

const movies = [
  { index: 0, name: "Batman", emojis: "🤵🏾🦇" },
  { index: 1, name: "It", emojis: "🤡🎈" },
  { index: 2, name: "La bella y la bestia", emojis: "👸🥀👹" },
  { index: 3, name: "Rapidos y furiosos", emojis: "🚗💨😡" },
  { index: 4, name: "Joker", emojis: "😖🤡🔫" },
  { index: 5, name: "Hulk", emojis: "🏃‍♂️🤢🙃" }
];

export default function Board() {
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [cleanForm, setCleanForm] = useState(false);
  const [movie, setMovie] = useState(movies[0]);

  const handleSendMovie = (movieGuess) => {
    const isGuessed = movie.name.toLowerCase() === movieGuess.toLowerCase();

    if (isGuessed) {
      setScore((prevScore) => prevScore + 1);
      setCleanForm(true);

      const isLatest = movie.index === movies.length - 1;
      setMovie(isLatest ? undefined : movies[movie.index + 1]);
      setTimeout(() => setCleanForm(false));
    } else {
      setLives((prevLives) => prevLives - 1);
    }
  };

  const handleReset = () => {
    setMovie(movies[0]);
    setScore(0);
    setLives(3);
  };

  if (lives === 0) {
    return <GameOver onReset={handleReset} />;
  }

  if (!movie) {
    return <GameWon score={score} onReset={handleReset} />;
  }

  return (
    <main className="board">
      <Score lives={lives} score={score} />
      <Title />
      <Emojis emojis={movie?.emojis} />
      <FormName clean={cleanForm} onSend={handleSendMovie} />
    </main>
  );
}
