import React from 'react';

function LearnButton () {
    const save = () => {
      alert("You Clicked on a Button!");
    }

    return (
      <div class="learnbtn">
        <button onClick={save}>Click Here To See What I've Learned!</button>
      </div>
    )
};

export default LearnButton;