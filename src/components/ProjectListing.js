import React from 'react';
import styled from 'styled-components';
import ProjectsCard from './ProjectsCard';

const ProjectListing = (props) => {
    return (
        <>
        <StyledDiv>
            <Name>{props.ProjectName}</Name>
            <Description>{props.ProjectDescription}</Description>
        </StyledDiv>
        </>
    );
}

export default ProjectListing;

const Name = styled.p`
    font-size: 25px;
    font-family: 'Unica One';
`

const Description = styled.p`
    font-size: 15px;
    font-family: 'Merriweather', serif;`

const StyledDiv = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 20px 0px 20px 0px;
    margin-bottom: 20px;
    background-color: #9CA89E;
`