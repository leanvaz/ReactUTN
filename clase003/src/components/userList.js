import { Col, Table } from "react-bootstrap";
import PropTypes from "prop-types";
const UsersList = ({ users }) => {
  return (
    <Col md={6}>
      <h3>Users</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
			{users?.length>0 &&
			users.map((users) => (
				<tr key={users.id}>
					<td>{users.id}</td>
					<td>{users.name}</td>
					<td>{users.age}</td>
					<td>✍</td>
					<td>❌</td>
				</tr>
			))
			}
        </tbody>
      </Table>
    </Col>
  );
};

UsersList.prototype = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      age: PropTypes.number,
    }).isRequired
  ),
};

export default UsersList;
