import React from 'react';
import {HotelProvider} from 'components/hotels/hotelContext'
import Hotels from 'components/hotels/Hotels'

const HotelsWrapper = () => {
    return (
        <HotelProvider>
            <Hotels />
        </HotelProvider>
    )
}

export default HotelsWrapper;