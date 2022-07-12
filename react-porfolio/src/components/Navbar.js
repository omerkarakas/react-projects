import { React, useState, useEffect } from 'react';
import { Link, useLocation, useMatch, useResolvedPath } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';

import '../styles/Navbar.css';
function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  // close the navigation bar whenever the location/url changes
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? 'open' : 'close'}>
      <div className="toggleButton">
        <span>okarakas.com</span>
        <button
          onClick={() => {
            // setExpandNavbar((x) => !x);
            setExpandNavbar(!expandNavbar);
          }}
        >
          {' '}
          <ReorderIcon />{' '}
        </button>
      </div>
      <div className="links">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/projects">Projects</CustomLink>
        <CustomLink to="/experience">Experience</CustomLink>
      </div>
    </div>
  );
}

function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li>
      <Link
        to={to}
        className={isActive ? 'link-component active' : 'link-component'}
      >
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
