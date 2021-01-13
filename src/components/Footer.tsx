import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Footer: React.FC = () => {
  return (
    <footer className="w-5/5 border-b-2 flex items-center justify-center m-auto">
      <AiFillGithub size={40} />
    </footer>
  );
};

export default Footer;
