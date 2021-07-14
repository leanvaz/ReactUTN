import {useEffect,useState } from 'react'
import {API} from "../API"

export const useGet = (endpoint,query) => {
	const [data,setData] = useState([]);
	const [loading,setLoading] = useState(true)
	const [error,setError] = useState(false)
console.log(error)
	const getData = async () => {
		try{
			const {data} = await API.get(endpoint+"/?"+query)
			setData(data);
			setLoading(false);
			setError(false);
		}catch(error){
			setError(true);
			setLoading(false);
		}

	};

	useEffect(() => {
		getData();
	},[query])

	return [
		data,
		loading,
		error
	];


};