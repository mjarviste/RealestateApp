import { Marker, Popup } from 'react-leaflet'
import './pin.scss'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import { Link } from 'react-router-dom'

const Pin = ({item}) => {
    return (
        <Marker key={item.id} position={[item.latitude,item.longitude]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>
                <div className="popUpContainer">
                    <img src={item.img} alt="" />
                    <div className="textContainer">
                        <Link className='title' to={`/${item.id}`}>{item.title}</Link>
                        <span className='bed'>{item.bedroom} bedroom</span>
                        <b>{item.price}€</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

export default Pin