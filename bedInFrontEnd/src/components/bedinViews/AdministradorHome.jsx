import React from 'react';

import LargeButton from '../LargeButton.jsx';

import { Link } from 'react-router';

function AdministradorHome(props) {
  return (
    <div>
      <div className="container containerPadding">
        <div className="row">
          <div className="col-xs-hidden col-sm-2 col-lg-4 col-xl-4"></div>
          <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4 ">

            <h2 className="subtitleHomes ">Usuarios</h2>

            <Link to="/Bedin/administrador/usercrear" className="btn icon-btn btn-info" id="linkHomeStyle">
              <span className="glyphicon spanStyle glyphicon glyphicon-user img-circle text-info"></span>
              Generar Usuario
            </Link>

            <Link to="/Bedin/administrador/userver" className="btn icon-btn btn-info" id="linkHomeStyle">
              <span className="glyphicon spanStyle glyphicon glyphicon-list img-circle text-info"></span>
              Lista de Usuarios
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdministradorHome;
