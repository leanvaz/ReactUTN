import { useCounter } from "../hooks/useCounter";
import {Container,Row,Col,Button} from "react-bootstrap"

const Counter = ({value}) => {
	const {increment, decrement,counter} = useCounter(value);
	return ( 
		<Container>
			<Row>
				<Col md={12}>
					<h1> El gran countador {counter}🧨</h1>
					<Button className='w-50' onClick={increment}>+1</Button>
					<Button className='w-50' onClick={decrement}>-1</Button>
				</Col>
			</Row>
		</Container>
	 );
};


 

export default Counter;