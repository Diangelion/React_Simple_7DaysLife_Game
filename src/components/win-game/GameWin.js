import { useNavigate } from "react-router-dom";

const GameWin = () => {
  const navigate = useNavigate();

  return (
    <div className="GameWin-container">
      <div className="container text-center">
        <h2>Congratulations... You Win!</h2>
        <button
          type="button"
          className="btn btn-success mt-2"
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameWin;
