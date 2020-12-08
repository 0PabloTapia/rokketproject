

const Image = ({pic}) => {

    //extrayendo datos con destructuring
    const { image, likes, text, link, tags } = pic;
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={image}  alt={tags} className="card-img-top"/>

                <div className="card-body card-body-style">
                    <p className="card-text cardtext-likes">{likes} Likes</p>
                    <p className="card-text cardtext-styling">{text}</p>
                </div>

                <div className="card-footer">
                    <a 
                        href={link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-block styling"
                        >About <i class="fas fa-info-circle"></i></a>
                </div>

            </div>
        </div>
    )
}

export default Image;
