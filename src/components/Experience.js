import React from "react";
import styled from "styled-components";
import ExperienceCard from "./ExperienceCard";
import Header from "./Header";
import ExperienceListing from "./ExperienceListing";

function Experience () {
    return (
    <>
        <div className="experience-content">
            <Header />
            <ResumeTitle>Kao Xiong</ResumeTitle>
            <Info>(651)123-4567 | kaoxiong@fakeemail.com | She/Hers/Her</Info>
            <ExperienceCard />
        </div>
    </>
    );
}

export default Experience;

const Info = styled.p`
    font-size: 13px;
    text-align: center;
    font-family: 'Merriweather', serif;
`

const ResumeTitle = styled.h1`
    text-align: center;
    font-size: 40px;
    font-family: 'Unica One';
`