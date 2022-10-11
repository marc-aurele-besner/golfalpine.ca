import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            {' '}
            <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="/img/logo_small.jpg" alt="Golf Alpine" width="100" height="100" />
          </a>{' '}
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/" className="page-scroll">
                Accueil
              </a>
            </li>
            <li>
              <a href="/parcours" className="page-scroll">
                Parcours
              </a>
            </li>
            <li>
              <a href="/tarifs" className="page-scroll">
                Tarifs
              </a>
            </li>
            <li>
              <a href="/passeDeSaison" className="page-scroll">
                Passe de saison
              </a>
            </li>
            <li>
              <a href="/services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="/nousContacter" className="page-scroll">
                Nous contacter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
