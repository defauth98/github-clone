import React from 'react';

import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

interface RepoItemProps {
  repoName: string;
  description: string;
  language: string;
  stars: string;
  forks: string;
}

const RepoItem: React.FC<RepoItemProps> = ({
  repoName,
  description,
  language,
  stars,
  forks,
}) => {
  return (
    <li className="my-4 border-2 p-2 px-4 rounded">
      <h3 className="text-blue-600 flex items-center">
        <RiBookMarkLine size={16} color="gray" className="mr-2" />
        {repoName}
      </h3>
      <p className="text-sm text-gray-500 my-2">{description}</p>
      <div className="flex items-center">
        {language ? (
          <span className="text-xs text-gray-500 flex items-center mr-2">
            {language === 'JavaScript' ? (
              <div className="bg-yellow-400	rounded-full w-3	h-3 mr-2"></div>
            ) : null}
            {language}
          </span>
        ) : null}

        <span className="text-xs text-gray-500 flex items-center mr-2">
          <RiStarLine size={16} color="gray" className="mr-2" />
          {stars}
        </span>
        <span className="text-xs text-gray-500 flex items-center  ">
          <AiOutlineFork size={16} color="gray" className="mr-2" />
          {forks}
        </span>
      </div>
    </li>
  );
};

export default RepoItem;
