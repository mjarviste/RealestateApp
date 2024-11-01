import { useState } from 'react'
import './slider.scss'

const Slider = ({images}) => {
    const [imgIdx, setImgIdx] = useState(null)

    const changeSlides = (direction) => {
        if(direction === "left") {
            if(imgIdx === 0) {
                setImgIdx(images.length - 1)
                return
            }
            setImgIdx(imgIdx - 1)
            return
        }
        if(imgIdx === images.length - 1) {
            setImgIdx(0)
            return
        }
        setImgIdx(imgIdx + 1)
        return
    }
    return (
        <div className="slider">
            {imgIdx !== null &&
            <div className="fullSlider">
                <div className="arrow">
                    <img src="/arrow.svg" className="left" alt="" onClick={() => changeSlides("left")} />
                </div>
                <div className="imgContainer">
                    <img src={images[imgIdx]} alt="" />
                </div>
                <div className="arrow">
                    <img src="/arrow.svg" alt="" onClick={() => changeSlides("right")} />
                </div>
                <div className="close" onClick={() => setImgIdx(null)}>X</div>
            </div>}
            <div className="bigImage">
                <img src={images[0]} alt="" onClick={() => setImgIdx(0)}/>
            </div>
            <div className="smallImages">
                {images.slice(1).map((img, idx)=>(
                    <img key={idx} src={img} alt='' onClick={() => setImgIdx(idx + 1 )}/>
                ))}
            </div>
        </div>
    )
}

export default Slider