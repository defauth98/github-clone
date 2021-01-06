import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Footer: React.FC = () => {
  return (
    <footer className="w-4/5 border-b-2 flex items-center justify-center	">
      <AiFillGithub size={40} />
    </footer>
  );
};

export default Footer;
