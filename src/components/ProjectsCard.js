import React from 'react';
import ProjectListing from './ProjectListing';
import styled from 'styled-components';

function ProjectsCard() {
  return (
    <>
    <ProjectsDiv>
    <ProjectListing
        ProjectName="DJ Days Project"
        ProjectDescription="Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua."
      />

    <ProjectListing
      ProjectName="Restaurant Project"
      ProjectDescription="LLorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua."
    />

    <ProjectListing
      ProjectName="API Project"
      ProjectDescription="Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua."
    />

    <ProjectListing
      ProjectName="Mood Tracker Project"
      ProjectDescription="Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua."
    />
    </ProjectsDiv>
    </>
  );
}

export default ProjectsCard;

const ProjectsDiv = styled.div`
  padding: 70px;
  align-items: center;
  text-align: center;
  float: center;
`