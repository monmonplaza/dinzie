import React from 'react'
import { TiTimes } from 'react-icons/ti'
const ModalMap = ({ showMap }) => {
    const { map, setMap } = showMap;

    const closeModal = () => {
        setMap(!map)
    }

    return (
        <>
            <div className={map ? "map__modal open" : 'map__modal '}>
                <div className="map__modal__main">
                    <h3>Our Location</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.1051798693934!2d121.29991371483399!3d14.070965890141501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5d2cd946c37d%3A0xd168f8100c3ed3af!2sSM%20City%20San%20Pablo!5e0!3m2!1sen!2sph!4v1629773098014!5m2!1sen!2sph" loading="lazy" title="map"></iframe>
                    <button onClick={closeModal}>Close</button>
                </div>
            </div>
        </>
    )
}

export default ModalMap
