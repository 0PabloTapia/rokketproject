import Image from './Image'

const ImagesList = ( {images} ) => {
    return(
        <div className="col-12 p-5 row">
            {images.map(pic => ( <Image key={pic.id} image={image} /> ))}
        </div>
    )
}

export default ImagesList;