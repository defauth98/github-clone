import React from 'react';

interface ProfileProps {
  userData: {
    name: string;
    avatar_url: string;
    login: string;
    followers: string;
    following: string;
    company: string;
    location: string;
    twitter_username: string;
  };
}

const ProfileInfo: React.FC<ProfileProps> = ({ userData }) => {
  return (
    <aside>
      <img src={userData.avatar_url} alt={userData.name} />
      <h1>{userData.name}</h1>
      <h2>{userData.login}</h2>
      <span>{userData.followers} followers</span>
      <span>{userData.following} following</span>
      <span>{userData.company}</span>
      <span>{userData.location}</span>
      <span>{userData.twitter_username}</span>
    </aside>
  );
};

export default ProfileInfo;
