import { useState, useEffect } from 'react';
import Form from './components/Form';
import ImagesList from './components/ImagesList';

function App() {

  const [search, setSearch] = useState('');
  const [images, setImages ] = useState([])

 useEffect(() => {
    const APIcall = async () => {
      if(search === '') return;

      const key = '5fce9865cbd2f94055cc6b2b'
      const url = 'https://dummyapi.io/data/api'

        const response = await fetch(`${url}/tag/${search}/post`, { headers: { 'app-id': key }  });
        const result = await response.json();

        setImages(result.data)
        console.log(result)
    }

    APIcall();
  }, [search])

  // const response = await fetch(`${url}/tag/${search}/post?&limit=10`, { headers: { 'app-id': key }  });
  // const result = await response.json();

  // setSearch(result)

  //  await axios(`${url}/tag/${search}/post?limit=10`, { headers: { 'app-id': key }  })
      // .then(({ data }) => setSearch(data))
      // .catch(console.error)
      // return;

  
  return (
    <div className="Container">
      <div className="jumbotron">
          <p className="lead text-center"> Rokket Search </p>

          <Form 
            setSearch={setSearch}
            />
      </div>
      <div className="row justify-content-center">
        <ImagesList 
          images={images}
        />
      </div>
    </div>
  );
}

export default App;
