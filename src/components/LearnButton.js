import React from 'react';
import styled from 'styled-components';

function LearnButton () {
    const save = () => {
      alert("You Clicked on a Button!");
    }

    return (
      <button onClick={save}>Let's See What I've Learned!</button>
    );
}

export default LearnButton;

  const save = styled.button`
    background-color: #EFA710;
    padding: 10px;
    cursor: pointer;
    border-radius: 18px;
    align: center;
    box-shadow: 5px 5px 5px grey;
    width: 400px;
    text-align: center;
  `;