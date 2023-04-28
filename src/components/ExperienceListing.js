import React from 'react';
import styled from 'styled-components';

const ExperienceListing = (props) => {
    return (
        <>
        <StyledDiv>
        <Name>{props.ExperienceName}</Name>
        <Type>{props.ExperienceType}</Type>
        <Date>{props.ExperienceDate}</Date>
        </StyledDiv>
        </>
    );
}

export default ExperienceListing;

const Name = styled.p`
    font-size: 25px;
    text-transform: uppercase;
    font-family: 'Unica One';
`

const Type = styled.p`
    font-size: 15px;
    font-family: 'Merriweather', serif;
`

const Date = styled.p`
    font-size: 15px;
    font-family: 'Merriweather', serif;
`

const StyledDiv = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 40%;
    padding: 10px;
    margin-bottom: 15px;
    background-color: #9CA89E;
`