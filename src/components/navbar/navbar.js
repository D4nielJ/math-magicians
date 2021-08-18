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
      <li key={link.key}>
        <NavLink to={link.path} className="link" activeClassName="link-active" exact>
          {link.text}
        </NavLink>
      </li>
    ));

  return (
    <nav>
      <div className="nav-container">
        <NavLink to={links[0].path}>
          <h1>Math Magicians</h1>
        </NavLink>
        <ul>{createLinks()}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
