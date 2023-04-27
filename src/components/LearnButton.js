import React from 'react';

function LearnButton () {
    const save = () => {
      alert("You Clicked on a Button!");
    }

    return (
      <button onClick={save}>Click Here To See What I've Learned!</button>
    );
}

export default LearnButton;