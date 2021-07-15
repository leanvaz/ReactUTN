//import logo from "./logo.svg";
import "./App.css";
import APICall from "./components/APICall";
import SearchForm from "./components/SearchForm";
import { useState } from "react";
import { Container } from "react-bootstrap";

function App() {
	const [query, setQuery] = useState("");
	const [form, setForm] = useState({
		name: "",
		status: "",
		species: "",
		type: "",
		gender: "",
	});

	const handleChange = (e) => {
		let filtro = "";
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});

		filtro += "name=" + form.name;
		filtro += "&status=" + form.status;
		filtro += "&species=" + form.species;
		filtro += "&type=" + form.type;
		filtro += "&gender=" + form.gender;

		setQuery(filtro);
	};

	return (
		<Container>
			<SearchForm onChange={handleChange} form={form} />
			<APICall query={query} />
		</Container>
	);
}

export default App;
