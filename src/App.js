import logo from './logo.svg';
import './App.css';
import Friend from './components/Friend';

import friends from './Data/friends.json';


function App() {
  console.log("Friends:", friends);
  

  const friendsComponents = [];

  for (const friend of friends) {
    console.log("friend:", friend);
    friendsComponents.push(
    <Friend name={friend.name} age={friend.age} sex={friend.sex}/>
    );
    
  }
  
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
     
     (friendsComponents)
    
    </div>
  );
}

export default App;
