import './App.css';
import Concerts from './components/concerts/Concerts'
import { ConcertProp, ConcertListProp } from './components/concerts/Concert.types';
import { useEffect, useState } from 'react';



/*
import { Route } from 'react-router';
import { FetchData } from './components/weather/FetchData';

import './custom.css'

const App = () => {
    return (
      <div>
        <Route exact path='/' component={<div></div>} />
        <Route path='/fetch-data' component={FetchData} />
      </div>
    );
}

export default App;
*/

function App() {
  const [concerts, setConcerts] = useState<ConcertListProp>()

  useEffect(() => {
    async function fetchData() {
      console.log(import.meta.env.VITE_API_URL);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}concerts`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: ConcertProp[] = await response.json();
        const updatedConcerts: ConcertListProp = {
          concerts: result
        }

        setConcerts(updatedConcerts);
      } catch (error) {
        console.error('Error featching data: ', error);
      }
    }
      
    fetchData();
  }, [])

  return (
    <div>
      { (concerts && concerts.concerts?.length > 0) &&
        <Concerts {...concerts}/>
      }
    </div>
  );
}

export default App;