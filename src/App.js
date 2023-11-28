import logo from './logo.svg';
import './App.css';
import Trainer from './components/trainer';
import Trainee from './components/Trainee';
function App() {
  return (
    <div>
    <h1>To do list</h1>
    <li>lundary</li>
    <li>cooking</li>
    <li>shopping</li>
    <img src='https://th.bing.com/th/id/R.0d7a5a5194b34114b59ce5386ef4a4b5?rik=6ZBQ%2bDWefLB8RA&pid=ImgRaw&r=0' alt='fruits'height={100}/>
    <br/>
    <a href='https://google.com'>google website</a>
     <h2>Forms</h2>
     
     <p>hello world</p>
     <Trainer name="Jenny" age="29" sex="Female"/>
     <Trainer name="Joe" age="34" sex="Male"/>
     <Trainer name="Jude" age="39" sex="Male"/>
     <Trainee />

    <input/>
    </div>
  );
}

export default App;
