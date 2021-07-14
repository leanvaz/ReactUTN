import './App.css';

const App = () => {
  const name = "leandro";
  const lastname = "Vazquez";
  const age = 26;
  const married = false;
  return(
    <div className="App">
      {age < 18 ? console.log('hola mundo') : <h1>Es mayor de edad</h1>}
      <p>hola mundo react</p>
      <p> mi nombre es: {name} {lastname}</p>
    </div>
  );
}

export default App;
