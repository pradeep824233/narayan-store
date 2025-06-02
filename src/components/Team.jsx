import React from 'react';
import './Team.css';

const teamMembers = [
  {
    name: "Narayan Saw",
    photo: "/images/ramesh.jpg", // public/images me image rakhna
    contact: "9801213580"
  },
  {
    name: "Chandrashekhar Saw",
    photo: "/images/suresh.jpg",
    contact: "9801283826"
  },
  {
    name: "Manish Saw",
    photo: "/images/manish.jpg",
    contact: "9801213580"
  }
];

const Team = () => {
  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.photo} alt={member.name} />
            <h3>{member.name}</h3>
            <p>Contact: {member.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
