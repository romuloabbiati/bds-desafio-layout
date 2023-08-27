import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-primary main-nav">
      <div className="container-fluid">
        <a href="link" className="nav-logo-text">
          <h4>Carros Top</h4>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#bdsdesafio-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggle-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id='bdsdesafio-navbar'>
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <a href="link" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="link">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
