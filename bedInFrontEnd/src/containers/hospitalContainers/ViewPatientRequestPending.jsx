import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actions/hospitalActions/patients';

import TableViewPendingPatientRequests from '../../components/hospitalViews/TableViewPendingPatientRequests.jsx';

function mapStateToProps(state) {
	return {
		isRequesting : state.patients.isRequesting,
		patients: state.patients.patientsData
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

class ViewPatientRequest extends React.Component {
	constructor(props) {
		super(props);
		this.setState = this.setState.bind(this);
	}

	componentWillMount() {
		this.props.fetchGetPatients();
	}

	setState(idPatient,state) {
		this.props.fecthSetPatientState(idPatient, state)
	}

	render() {
		console.log('this.props', this.props)
		let patients = (!this.props.patients) ? <p>Cargando...</p>
		: <TableViewPendingPatientRequests 
			patientsList = {this.props.patients} 
			setState = {this.setState}/>
		return (
			<div>
				{patients}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPatientRequest);