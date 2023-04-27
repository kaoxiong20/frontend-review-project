import React from "react";
import styled from "styled-components";

function Footer () {
    return (
        <>
        <Copyright>Copyright 2023, Kao Xiong</Copyright>
        </>
    )
};

export default Footer;

const Copyright = styled.p`
    text-align: center;
    font-size: 12px;
    font-family: 'Merriweather', serif;
`