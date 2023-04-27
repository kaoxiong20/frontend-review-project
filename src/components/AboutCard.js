import React from "react";
import styled from "styled-components";

function AboutCard () {
    return (
        <About>
            <div class="card">
                <h2>Title of Card</h2>
                <AboutP>Lorem epsum ...</AboutP>
            </div>
        </About>
    )
};

export default AboutCard;

const About = styled.div`
    align-items: center;
    font-size: 20px;
    font-family: 'Merriweather', serif;
`

const AboutP = styled.p`
    font-size: 15px;
    font-family: 'Merriweather', serif;
`