import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginForm = ({ setIsEmpty, isMale, setData }) => {
  const nameRef = useRef(null);
  const [status, setStatus] = useState();
  const educationRef = useRef(null);
  const [agreement, setAgreement] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      nameRef.current.value === "" ||
      educationRef.current.value === "" ||
      status === undefined ||
      agreement === undefined
    ) {
      setIsEmpty(true);
    } else {
      setData({
        name: nameRef.current.value,
        status: status,
        education: educationRef.current.value,
        isMale: isMale,
      });
      navigate("/game", { replace: true });
    }
  };

  return (
    <div className="row w-75">
      <h5 className="text-center">Login</h5>
      <hr className="my-4" />
      <form onSubmit={handleSubmit}>
        <div className="form-group my-2">
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter your name"
            ref={nameRef}
          />
        </div>
        <div className="form-group my-2">
          <div>
            <label>Status</label>
          </div>

          <div className="status-radio">
            <div className="status-radio-container">
              <input
                type="radio"
                name="status"
                id="student"
                value="Student"
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="student">
                <span className="label-radio"> Student</span>
              </label>
            </div>
          </div>
          <div className="status-radio">
            <div className="status-radio-container">
              <input
                type="radio"
                name="status"
                id="college-student"
                value="College Student"
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="college-student">
                <span className="label-radio">College Student</span>
              </label>
            </div>
          </div>
        </div>
        <div className="form-group my-2">
          <label htmlFor="inputEducationPlace">School/University</label>
          <input
            type="text"
            className="form-control"
            id="inputEducationPlace"
            placeholder="Enter your school or university name"
            ref={educationRef}
          />
        </div>
        <div id="terms-cond-container" className="my-2">
          <input
            type="checkbox"
            id="TermsAndCond"
            className="my-1"
            onChange={(e) => setAgreement(e.target.checked)}
          />
          <label htmlFor="TermsAndCond" className="mx-2">
            <small id="terms-cond-text">
              {" "}
              I have read and agree to the following "
              <Link id="terms-cond-link" to="#" target="_blank">
                Terms and Conditions
              </Link>
              "
            </small>
          </label>
        </div>
        <button type="submit" className="btn btn-light my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
