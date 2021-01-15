import React from 'react';

import RepoItem from '../components/RepoItem';

interface Repo {
  name: string;
  description: string;
  stargazers_count: string;
  language: string;
  forks_count: string;
}

interface RepoGridProps {
  repos: Array<Repo>;
}

const RepoGrid: React.FC<RepoGridProps> = ({ repos }) => {
  return (
    <main>
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
    </main>
  );
};

export default RepoGrid;
