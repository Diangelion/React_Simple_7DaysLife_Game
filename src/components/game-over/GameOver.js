import { useNavigate } from "react-router-dom";

const GameOver = () => {
  const navigate = useNavigate();
  return (
    <div className="GameOver-container">
      <div className="container text-center">
        <h2>You are dead...</h2>
        <button
          type="button"
          className="btn btn-danger mt-2"
          onClick={() => {
            navigate("/game", { replace: true });
          }}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default GameOver;
