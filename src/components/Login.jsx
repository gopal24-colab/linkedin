import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Nav>
        <Link to={"/"}>
          <img src="/images/login-logo.svg" alt="logo-full" />
        </Link>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcom to your professional community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  display: flex;
  padding: 12px 0 16px;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 24px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 1.1rem;
  font-weight: bold;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 10px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  transition: all 167ms ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  cursor: pointer;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 15px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgb(112, 181, 249, 0.15);
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 48px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 120px;
  align-items: center;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;
const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    z-index: -1;
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

export default Login;
