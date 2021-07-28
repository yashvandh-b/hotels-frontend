import React, {useContext} from 'react'
import {HotelContext} from './context'
import {LinkComponent} from './hotelComponents'

const Hotel = () => {
    const hotel = useContext(HotelContext)
    const hotel_id = parseInt(hotel.id)
    const link = "/hotels/" + hotel_id
    return (
        <React.Fragment>
            <tr>
                <td>{hotel.id}</td>
                <td><LinkComponent href={link}>{hotel.name}</LinkComponent></td>
                <td>{hotel.phone}</td>
                <td>{hotel.email}</td>
                <td>{hotel.user_id}</td>
            </tr>
        </React.Fragment>
    )
}
export default Hotel