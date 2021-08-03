import React, {useContext} from 'react'
import {HotelContext} from 'components/hotels/hotelContext'
import {LinkButton, DeleteButton} from 'components/hotels/hotelComponents'
import axios from 'axios'
import { API_LOCALHOST, HOTELS } from 'components/routes/config'

const Hotel = () => {
    const hotel = useContext(HotelContext)
    const hotel_id = parseInt(hotel.id)
    const hotel_path = HOTELS + '/' + hotel_id
    const delete_hotel_link = API_LOCALHOST + HOTELS + '/' + hotel_id

    const DeleteHotel = (e) => {
        console.log(hotel)
        axios.delete(delete_hotel_link)
        .then( (response) => {
            console.log(response)
            window.alert("deleted")
        })
        .catch( (errors) => {
            console.log(errors)
        })
    }

    return (
        <React.Fragment>
            <tr>
                <td>{hotel.id}</td>
                <td><LinkButton href={hotel_path}>{hotel.name}</LinkButton></td>
                <td>{hotel.phone}</td>
                <td>{hotel.email}</td>
                <td>{hotel.user_id}</td>
                <td><DeleteButton onClick={DeleteHotel} >Delete</DeleteButton> </td>
            </tr>
        </React.Fragment>
    )
}
export default Hotel