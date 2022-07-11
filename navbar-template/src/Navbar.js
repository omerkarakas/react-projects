import React from 'react';

function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Site Name
      </a>
      <ul>
        <CustomLink href="/pricing">Pricing</CustomLink>
        <CustomLink href="/about">About</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  const activeClass = path === href ? 'active' : '';
  return (
    <li className={activeClass}>
      <a href={href}>{children}</a>
    </li>
  );
}

export default Navbar;
