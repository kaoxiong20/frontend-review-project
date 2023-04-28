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
  padding: 10px;
  text-align: center;
  background: #ffffff;
  box-shadow: 7px 7px #B9B7BD;
  border-bottom: 2px solid #9CA89E;
  border-radius: 6px;
  font-family: 'Merriweather', serif;
  margin: 10px;
  item-align: center;
`