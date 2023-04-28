import React from 'react';
import styled from 'styled-components';

function ExperienceCard() {
  return (
    <ExperienceDiv>
    <ExperienceListing
        ExperienceName="University of Minnesota"
        ExperienceDate="Schooling"
        ExperienceType="Schooling"
      />

    <ExperienceListing
        ExperienceName="DJ Days Project"
        ExperienceDate="Mapping"
        ExperienceType="Employment"
      />

    <ExperienceListing
        ExperienceName="DJ Days Project"
        ExperienceDate="Mapping"
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