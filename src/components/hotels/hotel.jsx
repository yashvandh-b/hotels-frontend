import React from 'react'
import {LinkButton, DeleteButton} from 'components/hotels/hotelComponents'
import axios from 'axios'
import { HOTELS } from 'components/routes/config'
import {hotelAPILink} from 'components/data-services/api-links'

const Hotel = (props) => {

    const hotel = props.hotel
    console.log(hotel, "Hotel")
    const hotel_id = parseInt(hotel.id)
    const hotel_path = HOTELS + '/' + hotel_id

    const DeleteHotel = (e) => {
        console.log(hotel)
        axios.delete(hotelAPILink)
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