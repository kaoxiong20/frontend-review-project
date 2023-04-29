import React from 'react';
import projects from './projectdata';
import ProjectsCard from './ProjectsCard';
import styled from 'styled-components';

function ProjectListing() {
    return (
      <StyledDiv>
        {projects.map(projects =>
          <ProjectsCard 
            {...projects}
            key={projects.id}
          />
        )}
      </StyledDiv>
    );
  }

export default ProjectListing;

const StyledDiv = styled.div`
    max-width: 800px;
    text-align: center;
    float: center;
    margin: auto;
    margin-top: 40px;
`