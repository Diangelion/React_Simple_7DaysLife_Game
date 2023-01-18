import { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate } from "react-router-dom";

import Male from "../../assets/character/Male.png";
import Female from "../../assets/character/Female.png";

import Morning from "../../assets/time-bg/Morning.png";
import Afternoon from "../../assets/time-bg/Afternoon.png";
import Evening from "../../assets/time-bg/Evening.png";
import Night from "../../assets/time-bg/Night.png";

import Eat from "../../assets/activity-icon/eat-icon.svg";
import Study from "../../assets/activity-icon/study-icon.svg";
import Play from "../../assets/activity-icon/play-icon.svg";
import Sleep from "../../assets/activity-icon/sleep-icon.svg";

const MainGame = ({ data }) => {
  const [bg, setBg] = useState();
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(5);
  const [dayCounter, setDayCounter] = useState(0);
  const [day, setDay] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]);

  const [tempat, setTempat] = useState("Home");

  const [makan, setMakan] = useState(20);
  const [makanCounter, setMakanCounter] = useState(0);
  const [belajar, setBelajar] = useState(0);
  const [levelBelajar, setLevelBelajar] = useState(1);
  const [main, setMain] = useState(0);
  const [tidur, setTidur] = useState(100);
  const [tidurCounter, setTidurCounter] = useState(0);

  const navigateGameOver = useNavigate();
  function setGameOver() {
    navigateGameOver("/gameover", { replace: true });
  }

  const navigateGameWin = useNavigate();
  function setGameWin() {
    navigateGameWin("/gamewin", { replace: true });
  }

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setMin((prevMin) => prevMin + 1);
    }, 1000);

    if (min > 59) {
      setMin(0);
      setHour((prevHour) => prevHour + 1);
    }
    if (hour >= 6 && hour < 11) setBg(Morning);
    else if (hour >= 11 && hour < 15) setBg(Afternoon);
    else if (hour >= 15 && hour < 19) setBg(Evening);
    else if (hour >= 19 || hour < 6) setBg(Night);

    if (hour > 23) {
      setHour(0);
      setDayCounter((prevDayCounter) => prevDayCounter + 1);
    }

    if (dayCounter > 6) setGameOver();

    if (levelBelajar === 7) setGameWin();

    return () => {
      clearInterval(clockInterval);
    };
  }, [min]);

  useEffect(() => {
    const makanInterval = setInterval(() => {
      if (makan > 0) setMakan((prevMakan) => prevMakan - 1);
      if (makan === 0)
        setMakanCounter((prevMakanCounter) => prevMakanCounter + 1);
      if (makanCounter === 960) setGameOver();
    }, 3000);

    return () => {
      clearInterval(makanInterval);
    };
  }, [makan]);

  useEffect(() => {
    const mainInterval = setInterval(() => {
      if (main > 0) setMain((prevMain) => prevMain - 1);
    }, 10000);

    return () => {
      clearInterval(mainInterval);
    };
  }, [main]);

  useEffect(() => {
    const tidurInterval = setInterval(() => {
      if (tidur > 0) setTidur((prevTidur) => prevTidur - 7);
      else setTidur((prevTidur) => prevTidur - prevTidur);

      if (tidur === 0)
        setTidurCounter((prevTidurCounter) => prevTidurCounter + 1);
      if (tidurCounter === 24) setGameOver();
    }, 60000);

    return () => {
      clearInterval(tidurInterval);
    };
  }, [tidur]);

  const addHunger = () => {
    setMakan((prevMakan) => prevMakan + (100 - prevMakan));
    setMakanCounter(0);
    setMin((prevMin) => prevMin + 30);

    if (main >= 3) setMain((prevMain) => prevMain - 3);
    else setMain((prevMain) => prevMain - prevMain);

    if (tidur >= 3.5) setTidur((prevTidur) => prevTidur - 3.5);
    else setTidur((prevTidur) => prevTidur - prevTidur);
    if (tidur === 0)
      setTidurCounter((prevTidurCounter) => prevTidurCounter + 0.5);
    if (tidurCounter >= 24) setGameOver();
  };

  const addIntelligence = () => {
    if (makan < 10 && tidur < 20) {
      if (belajar >= 95) {
        setBelajar(0);
        setLevelBelajar((prevLevelBelajar) => prevLevelBelajar + 1);
      } else setBelajar((prevBelajar) => prevBelajar + 5);
    } else if (makan < 10 || tidur < 20) {
      if (belajar >= 90) {
        setBelajar(0);
        setLevelBelajar((prevLevelBelajar) => prevLevelBelajar + 1);
      } else setBelajar((prevBelajar) => prevBelajar + 10);
    } else {
      if (belajar >= 80) {
        setBelajar(0);
        setLevelBelajar((prevLevelBelajar) => prevLevelBelajar + 1);
      } else setBelajar((prevBelajar) => prevBelajar + 20);
    }
    setHour((prevHour) => prevHour + 2);

    if (makan >= 40) setMakan((prevMakan) => prevMakan - 40);
    else setMakan((prevMakan) => prevMakan - prevMakan);
    if (makan === 0)
      setMakanCounter((prevMakanCounter) => prevMakanCounter + 40);
    if (makanCounter >= 960) setGameOver();

    if (main >= 12) setMain((prevMain) => prevMain - 12);
    else setMain((prevMain) => prevMain - prevMain);

    if (tidur >= 14) setTidur((prevTidur) => prevTidur - 14);
    else setTidur((prevTidur) => prevTidur - prevTidur);
    if (tidur === 0)
      setTidurCounter((prevTidurCounter) => prevTidurCounter + 2);
    if (tidurCounter >= 24) setGameOver();
  };

  const addEntertainment = () => {
    setMain((prevMain) => prevMain + (100 - prevMain));
    setHour((prevHour) => prevHour + 2);

    if (makan >= 40) setMakan((prevMakan) => prevMakan - 40);
    else setMakan((prevMakan) => prevMakan - prevMakan);
    if (makan === 0)
      setMakanCounter((prevMakanCounter) => prevMakanCounter + 40);
    if (makanCounter >= 960) setGameOver();

    if (tidur >= 14) setTidur((prevTidur) => prevTidur - 14);
    else setTidur((prevTidur) => prevTidur - prevTidur);
    if (tidur === 0)
      setTidurCounter((prevTidurCounter) => prevTidurCounter + 2);
    if (tidurCounter >= 24) setGameOver();
  };

  const addExhaustion = () => {
    setTidur((prevTidur) => prevTidur + (100 - prevTidur));
    setHour(hour + 8 - 24);
    setDayCounter((prevDayCounter) => prevDayCounter + 1);

    setMakan(0);
    if (makan === 0)
      setMakanCounter((prevMakanCounter) => prevMakanCounter + 160);
    if (makanCounter >= 960) setGameOver();

    if (main >= 48) setMain((prevMain) => prevMain - 48);
    else setMain((prevMain) => prevMain - prevMain);
  };

  return (
    <div className="Game-container" style={{ background: `url(${bg})` }}>
      <div
        className="container p-3"
        style={bg === Night ? { color: "white" } : null}
      >
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col">
                <h3>Welcome, {data.name}!</h3>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <img
                  src={data.isMale ? Male : Female}
                  alt={data.isMale ? "Male" : "Female"}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <table
                  className={
                    bg === Night ? "table table-dark" : "table table-light"
                  }
                >
                  <tbody>
                    <tr>
                      <th>Status</th>
                      <td>:</td>
                      <td>{data.status}</td>
                    </tr>
                    <tr>
                      <th>School/University</th>
                      <td>:</td>
                      <td>{data.education}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="row">
              <div className="col text-end">
                <h5>{day[dayCounter]}</h5>
              </div>
            </div>

            <div className="row">
              <div className="col text-end">
                <h5>
                  {hour < 10 ? `0${hour}` : hour}:{min < 10 ? `0${min}` : min}
                </h5>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <div className="row mt-2">
                  <div className="col d-flex justify-content-center justify-content-md-end">
                    <h6>Hunger</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-center justify-content-md-end">
                    <ProgressBar
                      className="w-75 Progress-bar"
                      variant="primary"
                      now={makan}
                      label={`${makan}%`}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col d-flex justify-content-center justify-content-md-end">
                    <h6>Intelligence Lv.{levelBelajar}</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-center justify-content-md-end">
                    <ProgressBar
                      className="w-75 Progress-bar"
                      variant="primary"
                      now={belajar}
                      label={`${belajar}%`}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col d-flex justify-content-center justify-content-md-end">
                    <h6>Entertainment</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-center justify-content-md-end">
                    <ProgressBar
                      className="w-75 Progress-bar"
                      variant="primary"
                      now={main}
                      label={`${main}%`}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col d-flex justify-content-center justify-content-md-end">
                    <h6>Exhaustion</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-center justify-content-md-end">
                    <ProgressBar
                      className="w-75 Progress-bar"
                      variant="primary"
                      now={tidur}
                      label={`${tidur}%`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-4 mt-md-5 justify-content-center justify-content-md-end">
              <div className="col-2 p-0">
                <div className="text-center">
                  <img
                    className="card-img-top"
                    src={Eat}
                    alt="Card image cap"
                  />
                  <div className="card-body text-center mt-2">
                    <button className="btn btn-dark" onClick={addHunger}>
                      Eat
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-2 p-0">
                <div className="text-center">
                  <img
                    className="card-img-top"
                    src={Study}
                    alt="Card image cap"
                  />
                  <div className="card-body text-center mt-2">
                    <button
                      className="btn btn-dark"
                      onClick={addIntelligence}
                      disabled={
                        tempat === "Home" || hour > 19 || hour < 5
                          ? "disabled"
                          : null
                      }
                    >
                      Study
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3 col-lg-2 p-0">
                <div className="text-center">
                  <img
                    className="card-img-top"
                    src={Play}
                    alt="Card image cap"
                  />
                  <div className="card-body text-center mt-2">
                    <button className="btn btn-dark" onClick={addEntertainment}>
                      Have Fun
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-2 p-0">
                <div className="text-center">
                  <img
                    className="card-img-top"
                    src={Sleep}
                    alt="Card image cap"
                  />
                  <div className="card-body text-center mt-2">
                    <button
                      className="btn btn-dark"
                      onClick={addExhaustion}
                      disabled={
                        tempat === "Education" || (hour < 20 && hour)
                          ? "disabled"
                          : null
                      }
                    >
                      Sleep
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div id="Place-row" className="row mt-4">
              <div className="col text-end">
                <button
                  className={tempat === "Home" ? "Place-active" : null}
                  onClick={() => {
                    if (tempat !== "Home") {
                      setTempat("Home");

                      setMin((prevMin) => prevMin + 30);
                      if (makan >= 10) setMakan((prevMakan) => prevMakan - 10);
                      else setMakan((prevMakan) => prevMakan - prevMakan);
                      if (makan === 0)
                        setMakanCounter(
                          (prevMakanCounter) => prevMakanCounter + 10
                        );
                      if (makanCounter >= 960) setGameOver();

                      if (main >= 3) setMain((prevMain) => prevMain - 3);
                      else setMain((prevMain) => prevMain - prevMain);

                      if (tidur >= 3.5)
                        setTidur((prevTidur) => prevTidur - 3.5);
                      else setTidur((prevTidur) => prevTidur - prevTidur);

                      if (tidur === 0)
                        setTidurCounter(
                          (prevTidurCounter) => prevTidurCounter + 0.5
                        );
                      if (tidurCounter >= 24) setGameOver();
                    }
                  }}
                  style={bg === Night ? { color: "white" } : null}
                >
                  Home
                </button>
                <button
                  className={tempat === "Education" ? "Place-active" : null}
                  onClick={() => {
                    if (tempat !== "Education") {
                      setTempat("Education");

                      setMin((prevMin) => prevMin + 30);
                      if (makan >= 10) setMakan((prevMakan) => prevMakan - 10);
                      else setMakan((prevMakan) => prevMakan - prevMakan);
                      if (makan === 0)
                        setMakanCounter(
                          (prevMakanCounter) => prevMakanCounter + 10
                        );
                      if (makanCounter >= 960) setGameOver();

                      if (main >= 3) setMain((prevMain) => prevMain - 3);
                      else setMain((prevMain) => prevMain - prevMain);

                      if (tidur >= 3.5)
                        setTidur((prevTidur) => prevTidur - 3.5);
                      else setTidur((prevTidur) => prevTidur - prevTidur);

                      if (tidur === 0)
                        setTidurCounter(
                          (prevTidurCounter) => prevTidurCounter + 0.5
                        );
                      if (tidurCounter >= 24) setGameOver();
                    }
                  }}
                  style={bg === Night ? { color: "white" } : null}
                >
                  School/University
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainGame;
