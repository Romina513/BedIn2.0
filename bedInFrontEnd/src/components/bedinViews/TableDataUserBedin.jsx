import React from 'react';

function TableDataUserBedin(props) {
	const users = props.users.map(user =>
		<tr key = {user._id}>
			<td>{user.name}</td>
			<td>{user.username}</td>
			<td>{user.createdAt}</td>
			<td>{user.workplace || 'Bedin'}</td>
			<td>{user.rol || 'Admin'}</td>
		</tr>
	)
	return (
		<table className = "table">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Usuario</th>
					<th>Fecha de creacion</th>
					<th>Entidad</th>
					<th>Rol</th>
				</tr>
			</thead>
			<tbody>
			{users}
			</tbody>
		</table>
	)
}

export default TableDataUserBedin;