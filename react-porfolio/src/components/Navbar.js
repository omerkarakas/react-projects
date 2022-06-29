import { React, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
        <Link to="/" className="link-component">
          Home
        </Link>
        <Link to="/projects" className="link-component">
          Projects
        </Link>
        <Link to="/experience" className="link-component">
          Experience
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
