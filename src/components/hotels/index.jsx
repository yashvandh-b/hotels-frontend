import React from 'react';
import {HotelsProvider} from 'components/hotels/hotelContext'
import Hotels from 'components/hotels/Hotels'



const HotelsWrapper = () => {
    return (
        <HotelsProvider>
            <Hotels />
        </HotelsProvider>
    )
}

export default HotelsWrapper;