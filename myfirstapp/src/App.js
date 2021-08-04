import logo from './logo.svg';
import './App.css';
import Car from './Car';
import CarState from './CarState';
import Event from './Event';
import Form from './Form';


function App() {
  let mycar={
    name:"Lamboghini",
    color:"purple"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcom Reactjs
        </p>
      </header>
      <Car yourcolor={mycar}/>
      <CarState name="Suzuki"/>
      <Event/>
      <Form/>
    </div>
  );
}

export default App;
