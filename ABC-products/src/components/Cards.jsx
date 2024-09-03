import "./Cards.css"

const Cards = (title , desc , price , contact)=>{
return(
    <>
   <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">{price}</p>
        <p className="card-location">{location}</p>
        <p className="card-date">{date}</p>
      </div>
    </div>
    </>
)
}

export default Cards