import { Link } from 'react-router-dom'
import './card.scss'

const Card = ({item}) => {
    return (
        <div className="card">
            <Link to={`/${item.id}`} className='imgContainer'>
                <img src={item.img} alt="" />
            </Link>
            <div className="textContainer">
                <h2 className='title'>
                    <Link to={`/${item.id}`}>
                        {item.title}
                    </Link>
                </h2>
                <p className='address'>
                    <img src="/pin.svg" alt="pin" />
                    <span>{item.address}</span>
                </p>
                <p className='price'>
                    {item.price}€
                </p>
                <div className="bottom">
                    <div className="features">
                        <div className="feature">
                            <img src="bedroom.svg" alt="" />
                            <span>{item.bedroom} bedroom</span>
                        </div>
                        <div className="feature">
                            <img src="bathroom.svg" alt="" />
                            <span>{item.bathroom} bathroom</span>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <img src="/save.svg" alt="" />
                        </div>
                        <div className="icon">
                            <img src="/message.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card