import React from 'react';
import styled from 'styled-components';

function LearnButton () {
    const save = () => {
      alert("You Clicked on a Button!");
    }

    return (
      <div class="learnbtn">
        <LearnBtn onClick={save}>Click Here To See What I've Learned!</LearnBtn>
      </div>
    )
};

export default LearnButton;

const LearnBtn = styled.button`
  background-color: #9CA89E;
  padding: 8px;
  width: 300px;
  color: #000000;
  item-align: center;
  border-radius: 6px;
  font-family: 'Merriweather', serif;
`