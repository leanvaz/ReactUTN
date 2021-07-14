import { Form, InputGroup, FormControl, Row, Col } from "react-bootstrap";

const SearchForm = ({ form, onChange }) => {
	return (
		<>
			<h3>Creacion de Usuarios</h3>

			<Form onSubmit={onChange}>
				<Row>
					<Col md={3}>
						<InputGroup className="mb-3">
							<FormControl
								placeholder="Name"
								name="name"
								onChange={onChange}
								aria-label="Nombre"
								value={form.name}
								aria-describedby="basic-addon1"
							/>
						</InputGroup>
					</Col>
					<Col md={3}>
						<InputGroup className="mb-3">
							<FormControl
								placeholder="Status"
								name="status"
								onChange={onChange}
								aria-label="Status"
								value={form.status}
								aria-describedby="basic-addon1"
							/>
						</InputGroup>
					</Col>
					<Col md={3}>
						<InputGroup className="mb-3">
							<FormControl
								placeholder="Species"
								name="species"
								onChange={onChange}
								aria-label="Species"
								value={form.species}
								aria-describedby="basic-addon1"
							/>
						</InputGroup>
					</Col>
					<Col md={3}>
						<InputGroup className="mb-3">
							<FormControl
								placeholder="Type"
								name="type"
								onChange={onChange}
								aria-label="Type"
								value={form.type}
								aria-describedby="basic-addon1"
							/>
						</InputGroup>
					</Col>
					<Col md={3}>
						<InputGroup className="mb-3">
							<FormControl
								placeholder="Gender"
								name="gender"
								onChange={onChange}
								aria-label="Gender"
								value={form.gender}
								aria-describedby="basic-addon1"
							/>
						</InputGroup>
					</Col>
				</Row>
			</Form>
		</>
	);
};

export default SearchForm;
