import React from "react";
import styled from "styled-components";

function Experience () {
    return (
    <>
        <div className="experience-content">
            <Info>Write about your experience here.</Info>
        </div>
    </>
    );
}

export default Experience;

const Info = styled.p`
    font-size: 15px;
    padding: 20px 30px 20px 30px;
    text-align: center;
    margin: auto;
    width: 400px;
    font-family: 'Merriweather', serif;
`