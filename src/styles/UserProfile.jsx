
import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <img src={user.imgUrl} alt={user.name} className="profile-image" />
      <div className="profile-details">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
