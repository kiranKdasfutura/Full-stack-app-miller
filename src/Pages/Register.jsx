import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
// import { Logo } from "../Components/Logo";
import { Logo, FormRow } from "../Components";

const Register = () => {
  return (
    <Wrapper>
      <form action="" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type={"test"} name={"name"} defaultValue={"kiran"} />
        <FormRow
          type={"text"}
          name={"lastname"}
          defaultValue={"kdas"}
          labelText={"last name"}
        />
        <FormRow type={"text"} name={"location"} defaultValue={"earth"} />
        <FormRow
          type={"email"}
          name={"email"}
          defaultValue={"kirankdas@mail.com"}
        />
        <FormRow
          type={"password"}
          name={"password"}
          defaultValue={"secret123"}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>

        <p>
          already have an account ?
          <Link to="/login" className="member-btn">
            Login page
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
