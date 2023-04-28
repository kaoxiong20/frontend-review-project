import React from "react";
import styled from "styled-components";
import AboutCard from "./AboutCard";

function About() {
    return (
    <>
        <div className="main-content">
            <Info>Lorem ipsum ... Might not need this, might delete later.
            </Info>
        </div>
        <AboutCard />
    </>
    );
}

export default About;

const Info = styled.p`
    font-size: 15px;
    padding: 60px;
    text-align: center;
    margin: auto;
    width: 400px;
    font-family: 'Merriweather', serif;
`