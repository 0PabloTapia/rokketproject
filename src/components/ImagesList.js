import Image from './Image'
import { Spring } from 'react-spring/renderprops'

const ImagesList = ( {images} ) => {
    return(
        // Animación Fade In al cargar los resultados pasada cómo props al componente con React Spring
        <Spring
            config={{delay: 150, duration: 800}}
            from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0 }}>
            {props =>  <div style={props} className="col-12 p-5 row">  
                            {images.map(pic => ( <Image  key={pic.id} pic={pic} /> ))} 
                       </div>}
        </Spring>
       
    )
}

export default ImagesList;