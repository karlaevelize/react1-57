import './App.css';
import Title from './components/Title';
import Button from './components/Button';
import MyMap from './components/MyMap';
import Pokemon from './components/Pokemon';

function App() {
  // we write our JavaScript code here

  return (
    //  we write out "HTML" code here
    <>
      <Title title="Testing Props"/>
      <Title title="My Title"/>
      <p>My paragraph</p>
      <Button/>
      <MyMap/>
      <Pokemon/>
    </>

  );
}

export default App;
