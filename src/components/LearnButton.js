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
  font-size: 
`