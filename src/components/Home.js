import React from 'react';
import styled from 'styled-components';
import LearnButton from './LearnButton';

const Home = () => {
  return (
    <>
      <HomeHeader>Kao's Final Project</HomeHeader>
      <center>
        <AboutMe>My journey with Hack the Gap's Full Stack Development cohort.</AboutMe>
        <br/>
        <LearnButton />
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
  font-family: 'Merriweather', serif;
`

const AboutMe = styled.p`
  font-size: 13px;
  font-family: 'Merriweather', serif;
`
