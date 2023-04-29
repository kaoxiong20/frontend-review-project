import React from "react";
import ProjectsCard from "./ProjectsCard";
import styled from "styled-components";
import ProjectListing from "./ProjectListing";

function Projects () {
    return(
        <>
            <ProjectsTitle>My Projects</ProjectsTitle>
            <ProjectListing />
        </>
    )
};

export default Projects;

const ProjectsTitle = styled.h1`
    font-family: 'Unica One';
    font-size: 45px;
    text-align: center;
    margin-bottom: 0px;
    margin-top: 50px;
`