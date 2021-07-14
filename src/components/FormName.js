import { useEffect, useState } from "react";

const FormName = ({ onSend, clean }) => {
  const [movie, setMovie] = useState();
  const handleChange = (e) => setMovie(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    movie && onSend(movie);
  };

  useEffect(() => {
    if (clean) setMovie("");
  }, [clean]);

  return (
    <form className="form-movie" onSubmit={handleSubmit}>
      <input className="input" value={movie} onChange={handleChange} />
      <button className="btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default FormName;
