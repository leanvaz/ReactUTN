import "./App.css"
import { Container, Row } from "react-bootstrap";
import UsersList from "./components/userList";
import UserForm from "./components/UserForm";
import Header from "./components/Header"
import { useState} from 'react'
const App = () => {
  
  const [users,setUsers] = useState([])
  const addUser = (user) => {
    setUsers([user,...users]);

  }
  return (
    <Container className="base-elements">
      <Row>
          <Header />
          <UserForm addUser={addUser} />
          <UsersList users={users} />
      </Row>
    </Container>
  );
};

export default App;
