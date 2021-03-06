import React from 'react';

import LargeButton from '../LargeButton.jsx';

import { Link } from 'react-router';

function opcionalHomeFinanciador(props) {
  return (
      <div>
        
        <div className="container-fluid containerPadding">
          <div className="row" >
            <div className="col-xs-12 col-sm-2 col-lg-1  col-xl-1 " id="e7"  ></div>
            <div className="col-xs-12 col-sm-4 col-lg-3 col-xl-3 flex-item-center ">
            </div>
            
            <div className="col-xs-12 col-sm-4 col-lg-3 col-xl-3 oh text-aligt-center ">
                <div id="opcionalHomeFinanciadorContainer">
                  
                  <h2 className="text-xs-center ">Hospital</h2>
                    <Link className="btn btn-info" id="opcionalHomeFinanciadorLink" to="/Bedin/hospital/entver">
                      <span className="glyphicon spanStyle glyphicon glyphicon-list img-circle  flex-item-center" id="glyphicon-p"></span>
                      Solicitudes Pendientes
                    </Link>
   
                    <Link to="Bedin/hospital/usercrear" className="btn btn-info" id="opcionalHomeFinanciadorLink">
                      <span className="glyphicon spanStyle glyphicon glyphicon-user img-circle  flex-item-center" id="glyphicon-p"></span>
                      Aceptados
                    </Link>      
                                    
                </div>
            </div>

            

            <div className="col-xs-12 col-sm-4 col-lg-1 col-xl-1 " id="d7"></div>

          </div>
        </div>

      </div>
    )
}

export default opcionalHomeFinanciador;