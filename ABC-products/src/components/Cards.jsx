import "./Cards.css"

const Cards = ({image , title , price , location , contact}) => {
return(
    <>
    <div className="card-container">
   <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">{price} Rs.</p>
        <p className="card-location">{location}</p>
        <p className="card-date">{contact}</p>
      </div>
      <button>More Info</button>
    </div>
    </div>
    </>
)
}

export default Cards