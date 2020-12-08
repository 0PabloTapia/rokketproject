import { useState, useEffect } from 'react';
import Form from './components/Form';
import ImagesList from './components/ImagesList';
import Spinner from './components/Spinner';
import { FaRocket } from 'react-icons/fa';
import './App.css'

function App() {

  const [search, setSearch] = useState('');
  const [images, setImages ] = useState([])

  //State para cargar el spinner
  const [loading, setLoading] = useState(false)

 useEffect(() => {
    const APIcall = async () => {
      if(search === '') return;

      const key = '5fce9865cbd2f94055cc6b2b'
      const url = 'https://dummyapi.io/data/api'

        const response = await fetch(`${url}/tag/${search}/post`, { headers: { 'app-id': key }  });
        const result = await response.json();

      setLoading(true)
        
        setTimeout(() => {
          setLoading(false)
          setImages(result.data)  
        }, 2000);
    }

    APIcall();
  }, [search])

  const loadingSearch = (loading) ? <Spinner /> : <ImagesList images={images} />
  
  return (
    <div className="Container">
      <div className="jumbotron">
          <p className="lead text-center size"> Rokket Search <FaRocket /> </p>

          <Form 
            setSearch={setSearch}
            />
      </div>
      <div className="row justify-content-center">
        {loadingSearch}
      </div>
    </div>
  );
}

export default App;
