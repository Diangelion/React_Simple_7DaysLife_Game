import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BarLoader from "react-spinners/BarLoader";

import Home from "./components/redirect/Home";
import MainLogin from "./components/login-page/MainLogin";
import MainGame from "./components/in-game-page/MainGame";
import GameOver from "./components/game-over/GameOver";
import GameWin from "./components/win-game/GameWin";
import NotFound from "./components/not-found/NotFound";

function App() {
  const [data, setData] = useState(null);

  const [loader, setLoader] = useState(false);
  const [textLoading, setTextLoading] = useState("Loading Game");
  let counter = 0;

  const [logged, setLogged] = useState(false);

  // useEffect(() => {
  //   return () => {
  //     setLoader(true);

  //     const loadingInterval = setInterval(() => {
  //       counter++;
  //       setTextLoading((prevTextLoading) => prevTextLoading + ".");
  //       if (counter == 4) setTextLoading("Loading Game");
  //     }, 1000);

  //     setTimeout(() => {
  //       clearInterval(loadingInterval);
  //       setLoader(false);
  //     }, 8000);
  //   };
  // }, []);

  return (
    <>
      <div className="App">
        {loader ? (
          <div id="Loader">
            <div>
              <div className="row text-white text-center mb-2">
                {textLoading}
              </div>
              <div className="row">
                <BarLoader
                  color={"#fff"}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<MainLogin setData={setData} />} />
            <Route path="/game" element={<MainGame data={data} />} />
            <Route path="/gameover" element={<GameOver />} />
            <Route path="/gamewin" element={<GameWin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;
