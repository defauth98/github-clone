import React from 'react';

import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPin2Line,
  RiLinksLine,
} from 'react-icons/ri';

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
    <aside className="w-3/5">
      <img
        src={userData.avatar_url}
        alt={userData.name}
        className="rounded-full h-2/5 mb-4"
      />

      <h1 className="flex items-center text-2xl font-medium	">
        {userData.name}
      </h1>
      <h2 className="text-gray-600 text-base">{userData.login}</h2>

      <div className="flex items-center my-2 ">
        <span className="flex items-center font-bold">
          <RiGroupLine size={16} color="gray" className="mr-1" />
          {userData.followers}{' '}
          <p className="text-gray-600 mx-1 font-normal">followers</p>
        </span>

        <span className="flex mx-2 font-bold">
          {userData.following}{' '}
          <p className="text-gray-600 mx-1 font-normal">following</p>
        </span>
      </div>

      {userData.company ? (
        <span className="flex items-center">
          <RiBuilding4Line size={30} />
          {userData.company}
        </span>
      ) : null}

      <span className="flex items-center my-2">
        <RiMapPin2Line size={20} color="gray" />
        {userData.location}
      </span>

      <span className="flex items-center">
        <RiLinksLine size={20} color="gray" />
        {userData.twitter_username}
      </span>
    </aside>
  );
};

export default ProfileInfo;
