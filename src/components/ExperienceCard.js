import React from 'react';
import styled from 'styled-components';
import ExperienceListing from './ExperienceListing';

function ExperienceCard() {
  return (
    <ExperienceDiv>
    <ExperienceListing
        ExperienceName="University of Minnesota"
        ExperienceDate="2012 - 2017"
        ExperienceType="Schooling"
      />

    <ExperienceListing
        ExperienceName="Job 1"
        ExperienceDate="2012 - 2014"
        ExperienceType="Employment"
      />

    <ExperienceListing
        ExperienceName="Job 2"
        ExperienceDate="2015 - 2017"
        ExperienceType="Exmployment"
      />
    </ExperienceDiv>
  );
}

export default ExperienceCard;

const ExperienceDiv = styled.div`
  padding: 70px;
  align-items: center;
  text-align: center;
  float: center;
`