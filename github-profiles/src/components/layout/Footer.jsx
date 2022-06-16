import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-3 bg-gray-700 text-primary-content footer-center flex flex-col space-y-2">
      <div>
        <FaGithub className="pr-2 text-5xl" />
      </div>
      <p>Copyright &copy; {footerYear} All rights reserved</p>
    </footer>
  );
}

export default Footer;
