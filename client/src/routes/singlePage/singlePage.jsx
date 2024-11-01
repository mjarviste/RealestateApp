import Slider from '../../components/slider/Slider'
import './singlePage.scss'
import { singlePostData, userData } from '../../lib/dummyData'
import Map from '../../components/map/Map'


const SinglePage = () => {
    return (
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlePostData.images}/>
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1 className='title'>{singlePostData.title}</h1>
                                <div className='address'>
                                    <img className='pin' src="/pin.svg" alt="pin" />
                                    <span>{singlePostData.address}</span>
                                </div>
                                <div className='price'>
                                    {singlePostData.price}€
                                </div>
                            </div>
                            <div className="user">
                                <img src={userData.img} alt="" />
                                <span>{userData.name}</span>
                            </div>
                        </div>
                        <div className="bottom">
                            {singlePostData.description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                    <p className='title'>General</p>
                    <div className="listVertical">
                        <div className="feature">
                            <img src="/utilities.svg" alt="" />
                            <div className="featureText">
                                <span>Utilities</span>
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/pets.svg" alt="" />
                            <div className="featureText">
                                <span>Pet Policy</span>
                                <p>Pets allowed</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/fees.svg" alt="" />
                            <div className="featureText">
                                <span>Property Fees</span>
                                <p>Must have 3x the rent in total household income</p>
                            </div>
                        </div>
                    </div>
                    <p className='title'>Room Sizes</p>
                    <div className="sizes">
                        <div className="size">
                            <img src="/area.svg" alt="" />
                            <span>{singlePostData.size}sqm</span>
                        </div>
                        <div className="size">
                            <img src="/bedroom.svg" alt="" />
                            <span>{singlePostData.bedRooms} bedroom</span>
                        </div>
                        <div className="size">
                            <img src="/bathroom.svg" alt="" />
                            <span>{singlePostData.bathroom} bathroom</span>
                        </div>
                    </div>
                    <p className='title'>Neartby Places</p>
                    <div className="listHorizontal">
                        <div className="place">
                            <img src="/school.svg" alt="" />
                            <div className="placeText">
                                <span>School</span>
                                <p>{singlePostData.school}</p>
                            </div>
                        </div>
                        <div className="place">
                            <img src="/bus.svg" alt="" />
                            <div className="placeText">
                                <span>Bus Stop</span>
                                <p>{singlePostData.bus}</p>
                            </div>
                        </div>
                        <div className="place">
                            <img src="/restaurant.svg" alt="" />
                            <div className="placeText">
                                <span>Restaurant</span>
                                <p>{singlePostData.restaurant}</p>
                            </div>
                        </div>
                    </div>
                    <p className='title'>Location</p>
                    <div className="mapContainer">
                        <Map data={[singlePostData]} />
                    </div>
                    <div className="buttons">
                        <button>
                            <img src="/save.svg" alt="" />
                            Save the Place
                        </button>
                        <button>
                            <img src="/message.svg" alt="" />
                            Send a Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage