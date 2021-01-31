import React from 'react';

import { AiFillGithub } from 'react-icons/ai';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 h-14 flex items-center px-2 w-full ">
      <button className="mr-4 cursor-pointer ">
        <AiFillGithub size={40} />
      </button>
      <input
        type="text"
        name="github-username"
        id="github-username"
        placeholder="Github Username"
        className="w-full h-8  rounded bg-gray-700 border-gray-900 px-2 color text-black-900	outline-none"
        onChange={(event) => {}}
      />
    </header>
  );
};

export default Header;
