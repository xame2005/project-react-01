import React from 'react';

const Profile = props => {
  return (
    <div>
      <h2>Profile</h2>
      <ul>
        <li>{props.profile}</li>
      </ul>
    </div>
  );
};

export default Profile;
