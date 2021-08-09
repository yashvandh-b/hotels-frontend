import React from 'react';
import {HotelProvider} from 'components/hotels/hotelContext'
import ShowHotel from 'components/hotels/showHotel'

const ShowHotelWrapper = () => {
    return (
        <HotelProvider>
            <ShowHotel />
        </HotelProvider>
    )
}

export default ShowHotelWrapper;