import React, {useContext} from 'react'
import {HotelContext} from './context'

const Hotel = () => {
    const hotel = useContext(HotelContext)
    const id = parseInt(hotel.id)
    const link = "/hotel/" + id
    return (
        <React.Fragment>
            <tr>
                <td>{id}</td>
                <td><a href={link}>{hotel.name}</a></td>
                <td>{hotel.phone}</td>
                <td>{hotel.email}</td>
                <td>{hotel.user_id}</td>
            </tr>
        </React.Fragment>
    )
}
export default Hotel