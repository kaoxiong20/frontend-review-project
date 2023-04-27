import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <HomeHeader>Kao's Final Project</HomeHeader>
      <center>
        <AboutMe>My journey with Hack the Gap's Full Stack Foundations cohort.</AboutMe>
        <br/>
        <button type="submit">Let's See What I've Learned!</button>
      </center>
    </>
  );
}

export default Home;

const HomeHeader = styled.h1`
  font-size: 30px;
  text-align: center;
  margin: auto;
  width: 400px;
`

const AboutMe = styled.p`
  font-size: 13px;
`
