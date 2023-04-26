import React from 'react';
import styled from 'styled-components';

const Home = () => {

  return (
    <>
      <HomeHeader>Home Page</HomeHeader>
      <button type="submit">Let's See What I've Learned!</button>
    </>
  );
}

export default Home;

const HomeHeader = styled.h1`
  font-size: 30px;
`
