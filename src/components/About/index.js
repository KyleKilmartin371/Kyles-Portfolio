import React from 'react';
import profileImage from '../../assets/profile-image.jpg';

function About() {
    return (
<section className="my-5">
  <h1 id="about">About Kyle Kilmartin</h1>
  <img src={profileImage} className="my-2" style={{ width: "25%" }} alt="profile" />
</section>
      );
}

export default About;