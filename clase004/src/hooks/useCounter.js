import { useState,useCallback } from "react";
export const useCounter = (initialValue = 0) =>{
	const [counter,setCounter]=useState(initialValue);

	const increment = useCallback(() =>{
		setCounter(counter +1);
	},[counter])

	const decrement = useCallback(() =>{
		setCounter(counter -1);
	},[counter])

	return {
		increment,
		decrement,
		counter,
	};
}