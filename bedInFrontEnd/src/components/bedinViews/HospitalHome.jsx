import React from 'react';

import LargeButton from '../LargeButton.jsx';

import { Link } from 'react-router';

function HospitalHome(props) {
  return (
    <div>
      <div className="container containerPadding">
        <div className="row">
          <div className="col-xs-hidden col-sm-2 col-lg-2 col-xl-2"></div>
          <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4 ">

            <h2 className="subtitleHomes">Prestador</h2>

            <Link to="Bedin/hospital/entcrear" className="btn  btn-info" id="linkHomeStyle">
              <span className="glyphicon spanStyle glyphicon-plus img-circle text-info"></span>
              Adherir Prestador
            </Link>

            <Link className="btn btn-info" id="linkHomeStyle" to="/Bedin/hospital/entver">
              <span className="glyphicon spanStyle glyphicon glyphicon-list img-circle text-info"></span>
              Lista de Prestadores
            </Link>

          </div>

          <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-2 ">

            <h2 className="subtitleHomes">Usuarios </h2>

            <Link to="Bedin/hospital/usercrear" className="btn btn-info" id="linkHomeStyle">
              <span className="glyphicon spanStyle glyphicon glyphicon-user img-circle text-info"></span>
              Generar Usuario
            </Link>

            <Link to="/Bedin/hospital/userver" className="btn   btn-info" id="linkHomeStyle">
              <span className="glyphicon spanStyle glyphicon glyphicon-list img-circle text-info"></span>
              Lista de Usuarios
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HospitalHome;
