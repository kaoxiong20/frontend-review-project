import React from "react";
import styled from "styled-components";

function AboutCard () {
    return (
        <About>
            <div class="card">
                <h2>Title of Card</h2>
                <p>Lorem epsum ...</p>
            </div>
        </About>
    )
};

export default AboutCard;

const About = styled.div`
    align-items: center;
`