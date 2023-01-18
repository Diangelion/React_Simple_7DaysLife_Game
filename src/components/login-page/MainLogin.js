import LoginForm from "./login-components/LoginForm";
import Character from "./login-components/Character";
import { useState } from "react";

const MainLogin = ({ setData }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isMale, setIsMale] = useState(true);

  return (
    <div className="Login-container">
      <div className="container p-3">
        {isEmpty ? (
          <div className="row">
            <div className="col">
              <div className="alert alert-danger" role="alert">
                Please Fill All Required Fields!
              </div>
            </div>
          </div>
        ) : null}
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center">
            <Character isMale={isMale} setIsMale={setIsMale} />
          </div>
          <div className="col-md-8 d-flex justify-content-center">
            <LoginForm
              isMale={isMale}
              setIsEmpty={setIsEmpty}
              setData={setData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
