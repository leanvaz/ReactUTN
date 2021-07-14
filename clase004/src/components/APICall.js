import { Row, Col, Button, Card } from "react-bootstrap";
import { useGet } from "../hooks/useGet";
const APICall = ({ query }) => {
	const [info, loading, error] = useGet("character", query);
	console.log(info.results);
	if (loading) return <h3>cargando</h3>;
	if (error) return <h3>Ocurrió un error</h3>;

	return (
		<>
			<h1 className="text-center">Personajes</h1>

			<Row className="">
				{info.results.length > 0 &&
					info.results.map((character) => (
						<Col md={3}>
							<Card>
								<Card.Img variant="top" src={character.image} />
								<Card.Body>
									<Card.Title>{character.name}</Card.Title>
									<Card.Text className="text-left">
										<p>Status: {character.status}</p>
										<p>Species: {character.species}</p>
										<p>Type: {character.type}</p>
										<p>Garder: {character.gender}</p>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
			</Row>
		</>
	);
};

export default APICall;
