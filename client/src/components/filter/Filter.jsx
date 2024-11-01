import './filter.scss'

const Filter = () => {
    return (
        <div className="filter">
            <h1>Search results for <b>London</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text" id='city' name='city' placeholder='City Location' />
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select id="type" name='type'>
                        <option value="any">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select id="property" name='property'>
                        <option value="any">any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input type='number' id='minPrice' name='minPrice' placeholder='any' min={0} max={10000000} />
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input type='number' id='maxPrice' name='maxPrice' placeholder='any' min={0} max={10000000} />
                </div>
                <div className="item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <input type='number' id='bedroom' name='bedroom' placeholder='any' min={0} max={100} />
                </div>
                <button>
                    <img src="/search.svg" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Filter