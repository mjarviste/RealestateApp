import './newPostPage.scss'

const NewPostPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <div className="newPostPage">
            <div className="formContainer">
                <div className='formWrapper'>
                    <h1>Create a New Listing</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="titleContainer item">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" />
                        </div>
                        <div className="priceContainer item">
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price" id="price" />
                        </div>
                        <div className="addressContainer item">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" id="address" />
                        </div>
                        <div className="descContainer item">
                            <label htmlFor="desc">Description</label>
                            <textarea name="desc" id="desc" />
                        </div>
                        <div className="cityContainer item">
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" id="city" />
                        </div>
                        <div className="bedroomContainer item">
                            <label htmlFor="bedroom">Bedroom Number</label>
                            <input type="number" name="bedroom" id="bedroom" />
                        </div>
                        <div className="bathroomContainer item">
                            <label htmlFor="bathroom">Bathroom number</label>
                            <input type="text" name="bathroom" id="bathroom" />
                        </div>
                        <div className="latitudeContainer item">
                            <label htmlFor="latitude">Latitude</label>
                            <input type="text" name="latitude" id="latitude" />
                        </div>
                        <div className="longitudeContainer item">
                            <label htmlFor="longitude">Longitude</label>
                            <input type="text" name="longitude" id="longitude" />
                        </div>
                        <div className='typeContainer item'>
                            <label htmlFor="type">Type</label>
                            <select id="type" name='type'>
                                <option value="buy">Buy</option>
                                <option value="rent">Rent</option>
                            </select>
                        </div>
                        <div className="propertyContainer item">
                            <label htmlFor="property">Property</label>
                            <select id="property" name='property'>
                                <option value="apartment">Apartment</option>
                                <option value="house">House</option>
                                <option value="condo">Condo</option>
                                <option value="land">Land</option>
                            </select>
                        </div>
                        <div className='utilitiesContainer item'>
                            <label htmlFor="utilities">Utilities</label>
                            <select id="utilities" name='utilities'>
                                <option value="owner">Owner is responsible</option>
                                <option value="rent">Renter is responsible</option>
                            </select>
                        </div>
                        <div className='petsContainer item'>
                            <label htmlFor="pets">Pet Policy</label>
                            <select id="pets" name='pets'>
                                <option value="allowed">Allowed</option>
                                <option value="not-allowed">Not allowed</option>
                            </select>
                        </div>
                        <div className="incomePolicyContainer item">
                            <label htmlFor="incomePolicy">Income Policy</label>
                            <input type="text" name="incomePolicy" id="incomePolicy" placeholder='Income Policy' />
                        </div>
                        <div className="totalSizeContainer item">
                            <label htmlFor="totalSize">Total Size (m2)</label>
                            <input type="number" name="totalSize" id="totalSize" />
                        </div>
                        <div className="schoolContainer item">
                            <label htmlFor="school">School</label>
                            <input type="number" name="school" id="school" />
                        </div>
                        <div className="busContainer item">
                            <label htmlFor="bus">Bus</label>
                            <input type="number" name="bus" id="bus" />
                        </div>
                        <div className="restaurantContainer item">
                            <label htmlFor="restaurant">Restaurant</label>
                            <input type="number" name="restaurant" id="restaurant" />
                        </div>
                        <div className="buttonContainer item">
                            <button type='submit'>Add Listing</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="imagesContainer"></div>
        </div>
    )
}

export default NewPostPage