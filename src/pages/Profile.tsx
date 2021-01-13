import axios from 'axios';
import React, { useEffect, useState } from 'react';

import RepoItem from '../components/RepoItem';

interface Repo {
  name: string;
  description: string;
  stargazers_count: string;
  language: string;
  forks_count: string;
}

const ProfilePage: React.FC = () => {
  const [username = 'defauth98', setUsername] = useState('defauth98');
  const [userData, setUserData] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((userReponse) => {
        if (userReponse.status === 400) {
          setUserData({ error: 'User not found' });

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
    <div className="flex items-center justify-center my-4">
      <nav>
        <ul>
          <li>Repositories</li>
        </ul>
      </nav>
      <aside>
        <h2>Repositórios</h2>
        <ul className="grid gap-4 grid-cols-2">
          {repos.map((repo: Repo) => (
            <RepoItem
              key={repo.name}
              repoName={repo.name}
              description={repo.description}
              language={repo.language}
              stars={repo.stargazers_count}
              forks={repo.forks_count}
            />
          ))}
        </ul>
      </aside>
      <main></main>
    </div>
  );
};

export default ProfilePage;
