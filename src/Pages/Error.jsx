import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import logo from "../assets/images/not-found.svg";
const Error = () => {
  const error = useRouteError();
  console.log("error type",error.status);

  if (error.status === 404) {
 return(
  <Wrapper>
  <div>
    <img src={logo} alt="404 error page not found" />
    <h2>page not found</h2>
    <p>in our directory this page is not listed</p>
  <Link to="dashboard" >Back to home</Link>
  </div>
</Wrapper>
 )
  }
  return (
    <Wrapper>
      <div>
        <h3>page not found oops!</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
