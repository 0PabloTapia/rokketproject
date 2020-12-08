import {useState} from 'react';
import Error from './Error';

const Form = ( {setSearch} ) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(false);

    const userSearch = (e) => {
        e.preventDefault();

        //validar
        if(searchTerm.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        //enviar búsqueda al componente principal
        setSearch(searchTerm);
    }

    return(
        <form
            onSubmit={userSearch}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Ingresa una búsqueda"
                        onChange={ e => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-lg btn-primary btn-block styling"
                        value="Launch!"
                    />
                </div>
            </div>
            
            { error ? <Error message="Agrega algún término de búsqueda" /> : null }
        </form>
    )
}


export default Form;