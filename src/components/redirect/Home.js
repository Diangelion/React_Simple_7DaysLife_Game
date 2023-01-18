import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 0);
    };
  }, []);
};

export default Home;
