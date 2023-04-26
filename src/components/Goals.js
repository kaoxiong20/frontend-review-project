import React from "react";
import styled from "styled-components";

function Goals () {
    return (
    <>
        <div className="main-content">
            <Info>Write about your goals here.</Info>
        </div>
    </>
    );
}

export default Goals;

const Info = styled.p`
    font-size: 15px;
    padding: 20px 30px 20px 30px;
    text-align: center;
    margin: auto;
    width: 400px;
`