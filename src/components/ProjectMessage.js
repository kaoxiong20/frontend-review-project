import React from 'react';
import styled from 'styled-components';

const ProjectMessage = (props) => {
    return (
        <>
        <Message>{props.MessageContent}</Message>
        </>
    );
}

export default ProjectMessage;

const Message = styled.h3`
    text-align: center;
    background-color: #B47A7A;
`