import React from "react";
import styled from "styled-components";

function AboutCard () {
    return (
        <About>
            <div class="card">
                <AboutTitle>Title of Card</AboutTitle>
                <AboutP>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</AboutP>
            </div>
        </About>
    )
};

export default AboutCard;

const About = styled.div`
    align-items: center;
    font-size: 18px;
    font-family: 'Merriweather', serif;
`

const AboutTitle = styled.h1`
    font-family: 'Unica One';
`

const AboutP = styled.p`
    font-size: 15px;
    font-family: 'Merriweather', serif;
`