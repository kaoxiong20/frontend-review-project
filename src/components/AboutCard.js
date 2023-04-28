import React from "react";
import styled from "styled-components";

function AboutCard () {
    return (
            <div class="card">
                <AboutTitle>How Did I Learn About Hack the Gap?</AboutTitle>
                <AboutP>
                    I first learned about Hack the Gap's opportunity
                    in a time where I was beginning to search for a career change.
                    This was in the Fall of 2022. I was made aware of this
                    opportunity through a community group that I am a part
                    of on Facebook, called LOCUS. It sounded like a great opportunity
                    to familiarize and introduce myself into the coding world so I
                    decided to grasp onto the opportunity.
                </AboutP>
            </div>
    )
};

export default AboutCard;

const About = styled.div`
    align-items: center;
    font-size: 18px;
    font-family: 'Merriweather', serif;
`

const AboutTitle = styled.h1`
    font-family: 'Unica One';
`

const AboutP = styled.p`
    font-size: 15px;
    font-family: 'Merriweather', serif;
`