import PropTypes from 'prop-types';

export default function Nav({ links }) {
    return (
      <nav>
        <ul className="nav justify-content-end">
          {links.map((link, index) => (
            <li className="nav-item" key={index}>
              {link}
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  Nav.propTypes = {
    links: PropTypes.arrayOf(PropTypes.node).isRequired,
  };
