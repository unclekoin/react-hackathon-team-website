import React from 'react';
import logo from '../assets/images/logo.png'

const Footer = () => {
  return (
    <div className="p-3 bg-light">
      <footer className="container pt-4 my-md-5 pt-md-5">
        <div className="row">
          <div className="col-12 col-md d-flex flex-column align-items-center">
            <img className="mb-2" src={logo} alt="logo" width="70" />
            <small className="d-block mb-3 text-muted">&copy; 2021</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Cool stuff
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Random feature
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Team feature
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Stuff for developers
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Resource
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Resource name
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Another resource
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Team
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Locations
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Privacy
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;