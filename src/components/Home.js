import React from 'react';
import styled from 'styled-components';
import LearnButton from './LearnButton';
import Header from './Header';

const Home = () => {
  return (
    <>
      <Header />
      <HomeHeader>Kao's Portfolio</HomeHeader>
      <HomeDiv>
        <AboutMe>Welcome to Kao's Portfolio! On this webpage I will display
          the projects I've worked on during my time with Hack the Gap's
          Full Stack Development cohort.
          <br/>
          Enjoy!</AboutMe>
        <LearnButton />
      </HomeDiv>
    </>
  );
}

export default Home;

const HomeHeader = styled.h1`
  font-size: 40px;
  text-align: center;
  font-family: 'Unica One';
`

const AboutMe = styled.p`
  font-size: 13px;
  font-family: 'Merriweather', serif;
`

const HomeDiv = styled.div`
  text-align: center;
  max-width: 500px;
  margin: auto;
`
