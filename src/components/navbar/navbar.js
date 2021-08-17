import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const links = [
    {
      key: 1,
      path: '/',
      text: 'Home',
    },
    {
      key: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      key: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  const createLinks = () =>
    links.map((link) => (
      <li className="link" key={link.key}>
        <NavLink to={link.path} activeClassName="active-link">
          {link.text}
        </NavLink>
      </li>
    ));

  return (
    <nav>
      <h1>Math Magicians</h1>
      <ul>{createLinks()}</ul>
    </nav>
  );
};

export default Navbar;
