import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const links = [
    { id: 1, path: '/', text: 'Home' },
    { id: 2, path: '/calculator', text: 'Calculator' },
    { id: 3, path: '/quotes', text: 'Quotes' },
  ];
  return (
    <nav className="navBar">
      <h1>Math Magicians</h1>
      <div className="navbar-links-cont">
        <button type="button" onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: '#0166ff', width: '30px', height: '30px' }} />
          ) : (
            <FiMenu style={{ color: '#0166ff', width: '30px', height: '30px' }} />
          )}
        </button>
        <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                onClick={() => closeMenu()}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
