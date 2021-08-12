import React from 'react'
import {LinkButton, DeleteButton} from 'components/hotels/hotelComponents'
import axios from 'axios'
import { HOTELS } from 'components/routes/config'
import {hotelAPILink} from 'components/data-services/api-links'
import {notify} from 'components/notification'
import {useHotel, fetchHotelsList} from 'components/hotels/hotelContext'

const Hotel = (props) => {

    const hotel = props.hotel
    console.log(hotel, "Hotel")
    const hotel_id = parseInt(hotel.id)
    const hotel_path = HOTELS + '/' + hotel_id
    const [state, dispatch] = useHotel()

    const deleteHotel = (e) => {
        console.log(hotel)
        axios.delete(hotelAPILink(hotel_id))
        .then( (response) => {
            console.log(response)
            //const [currentPage, setCurrentPage] = useState(1);
            //const [postsPerPage] = useState(5);
            const page = 1;
            fetchHotelsList(dispatch, page);
        })
        .catch( (errors) => {
            console.log(errors)
        })
        notify("Hotel Deleted :)");
    }

    return (
        <React.Fragment>
            <tr>
                <td>{hotel.id}</td>
                <td><LinkButton href={hotel_path}>{hotel.name}</LinkButton></td>
                <td>{hotel.phone}</td>
                <td>{hotel.email}</td>
                <td>{hotel.user_id}</td>
                <td><DeleteButton onClick={deleteHotel} >Delete</DeleteButton> </td>
            </tr>
        </React.Fragment>
    )
}
export default Hotel