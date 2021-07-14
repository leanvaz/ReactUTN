import React, { useState } from "react"
import '../../css/Counter.css';
const Counter = () =>{
	//state
	const [counter,setCounter] = useState(0)

	const increment = () => {
		setCounter(counter+1)
	}
	const decrement = () => {
		setCounter(counter-1)
	}
	return(
		<>
			<h3>Contador</h3>
			<h4>Cuenta: {counter}</h4>
			<button onClick={increment}>+1</button>
			<button onClick={decrement}>-1</button>
		</>
	)
}

export default Counter;