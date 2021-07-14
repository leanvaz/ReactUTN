import { useState} from 'react'
import { Form, InputGroup, FormControl, Button, Col } from "react-bootstrap";

const defaultUser = {
	id:"",
	name:"",
	age:"",
}

const UserForm = ({addUser}) => {
	const [user,setUser] = useState(defaultUser)
	
	const handleInput = (e) =>{
		setUser({...user, [e.target.name] : e.target.value})
	}

	const createUser = (e) =>{
		e.preventDefault();
		addUser({...user,id:Date.now()});
	}


  return (
    <Col md={6}>

      <h3>Creacion de Usuarios</h3>
	  <Form onSubmit={createUser}>
	  <InputGroup className="mb-3">
        <FormControl placeholder="Nombre" name="name" onChange={handleInput} aria-label="Nombre" aria-describedby="basic-addon1"/>
      </InputGroup>
	  <InputGroup className="mb-3">
        <FormControl placeholder="Edad" name="age" onChange={handleInput} aria-label="Edad" aria-describedby="basic-addon1"/>
      </InputGroup>
	  <Button type="submit" className='w-100'>Agregar</Button>
	  </Form>
    </Col>
  );
};

export default UserForm;
