import React from "react";
import Styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../Components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
      <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job<span>Tracking</span>App
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            fugit illum autem impedit voluptatibus alias recusandae quo error
            explicabo quam quia, ratione fuga veniam nisi harum quisquam.
            Doloribus, delectus deserunt.
          </p>

          <Link to={"/register"} className="btn register-link">
          Register
        </Link>
        <Link to={"/login"} className="btn ">
          Login/Demo
        </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
