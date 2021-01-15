import axios from 'axios';
import React, { useEffect, useState } from 'react';

import RepoGrid from '../components/RepoGrid';
import ProfileInfo from '..//components/ProfileInfo';

interface userData {
  avatar_url: string;
  name: string;
  login: string;
  followers: string;
  following: string;
  company: string;
  location: string;
  twitter_username: string;
}

const ProfilePage: React.FC = () => {
  const [username = 'defauth98', setUsername] = useState('defauth98');
  const [userData, setUserData] = useState<userData>({} as userData);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((userReponse) => {
        if (userReponse.status === 400) {
          setUserData({} as userData);

          return;
        }

        setUserData(userReponse.data);
      });
  }, [username]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((repoReponse) => {
        if (repoReponse.status === 400) {
          setRepos([]);

          return;
        }

        const repos = repoReponse.data;

        const shuffledRepos = repos.sort(() => 0.5 - Math.random());
        const slicedRepos = shuffledRepos.slice(0, 6); // 6 repos

        setRepos(slicedRepos);
      });
  }, [username]);

  return (
    <div className="flex flex-col items-center my-4 mx-4">
      <nav>
        <ul>
          <li>Repositories</li>
        </ul>
      </nav>
      <div className="flex w-4/5">
        <ProfileInfo userData={userData} />
        <RepoGrid repos={repos} />
      </div>
    </div>
  );
};

export default ProfilePage;
