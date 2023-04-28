import React from 'react';
import ProjectListing from './ProjectListing';
import styled from 'styled-components';

function ProjectsCard() {
  return (
    <ProjectsDiv>
    <ProjectListing
        ProjectName="DJ Days Project"
        ProjectType="Mapping"
      />

    <ProjectListing
      ProjectName="Restaurant Project"
      ProjectType="Forgot"
    />

    <ProjectListing
      ProjectName="API Project"
      ProjectType="API"
    />

    <ProjectListing
      ProjectName="Mood Tracker Project"
      ProjectType="Forgot"
    />
    </ProjectsDiv>
  );
}

export default ProjectsCard;

const ProjectsDiv = styled.div`
  padding: 70px;
  align-items: center;
  text-align: center;
  float: center;
`