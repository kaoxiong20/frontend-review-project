import React from 'react';
import styled from 'styled-components';

const ProjectsCard = ({img, name, description}) => {
  return (
    <ProjectsDiv>
      <img src={img} alt={name}/>
      <ProjectName>{name}</ProjectName>
      <ProjectDescription>{description}</ProjectDescription>
    </ProjectsDiv>
  );
}


export default ProjectsCard;

const ProjectsDiv = styled.div`
  float: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 20px 0px 20px 0px;
  margin-bottom: 20px;
  background-color: #9CA89E;
`

const ProjectName = styled.p`
    font-size: 30px;
    font-family: 'Unica One';
`

const ProjectDescription = styled.p`
    font-size: 15px;
    font-family: 'Merriweather', serif;`