import React from 'react';
import styled from 'styled-components';

const ProjectListing = (props) => {
    return (
        <>
        <StyledDiv>
        <Name>{props.ProjectName}</Name>
        <Type>{props.ProjectType}</Type>
        </StyledDiv>
        </>
    );
}

export default ProjectListing;

const Name = styled.p`
    background-color: #B2A6A6;
`

const Type = styled.p`
background-color: #F0E9E9;
`

const StyledDiv = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 40%;
    padding: 10px;
    margin-bottom: 15px;
    background-color: #CFCFCF;
`