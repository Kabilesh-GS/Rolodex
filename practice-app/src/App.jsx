import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(content => {
              setMonsters(content);
              setFilteredMonsters(content);
          })
          .catch(error => console.error('Error fetching data:', error));
        }, []); 

  return (
      <div>
         <input className='search' placeholder='Search' type='search' onChange={(event)=>{
                const searchText = event.target.value.toLowerCase();
                const filtered = monsters.filter(monster => monster.name.toLowerCase().includes(searchText));
                setFilteredMonsters(filtered);
            }} />
          {filteredMonsters.map((monster, index) => (
              <div key={index}><h1>{monster.name}</h1></div>
          ))}
      </div>
  );
}

export default App
