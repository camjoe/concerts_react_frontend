import './App.css';
import Concerts from './components/concerts/Concerts';
import { Concert, ConcertList, convertFromPython } from './components/concerts/Concert.types';
import { useEffect, useState } from 'react';

function App() {
  const [concerts, setConcerts] = useState<ConcertList>()


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}concerts`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        if (import.meta.env.VITE_BACKEND_ENV == "python") {
          const result: [] = await response.json();
          const updatedConcerts: ConcertList = {
            concerts: convertFromPython(result)
          }

          setConcerts(updatedConcerts);
        } else {
          const result: Concert[] = await response.json();
          const updatedConcerts: ConcertList = {
            concerts: result
          }

          setConcerts(updatedConcerts);
        }
      } catch (error) {
        console.error('Error featching data: ', error);
      }
    }

    fetchData();
  }, [])

  return (
    <div>
      {(concerts && concerts.concerts?.length > 0) &&
        <Concerts {...concerts} />
      }
    </div>
  );
}

export default App;