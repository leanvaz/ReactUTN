import {useEffect,useState } from 'react'
import { useCounter } from "../hooks/useCounter";
import {Container,Row,Col,Button} from "react-bootstrap"
const Effect = () => {

	const {increment,decrement,counter} = useCounter();

	const [name,setName] = useState('')

	useEffect(() => {
		console.log("%c me ejecuto solo al inicio", "color:red");
	},[])

	useEffect(() => {
		console.log("%c me ejecuto cuando se dispara increment", "color:blue");
	},[counter])

	useEffect(() => {
		console.log("%c me ejecuto cuando cambia el name", "color:yellow");
	},[name])

	const handleInput = (e) => {
		setName(e.target.value)
	}

	return ( 
	<Col md={12}>
		<h3>Use Effect</h3> 
		<h4>Contador: {counter} soy:{name}</h4>
		<Button type='button' onClick={increment}>+1</Button>
		<Button type='button' onClick={decrement}>-1</Button>
		<input type='text' placeholder='nombre' onChange={handleInput}>
		</input>

	</Col>
	);
}
 
export default Effect;