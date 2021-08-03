import React, {useEffect, useState} from 'react'
import {useParams, useLocation} from 'react-router-dom'
import axios from 'axios'
import {AllButton, BackButton, AddButton, EditButton} from 'components/hotels/hotelComponents'
import {API_LOCALHOST, LOCALHOST, HOTELS, BRANCHES, NEW, EDIT } from 'components/routes/config'


const ShowHotel = () => {

    const { hotel_id } = useParams();
    const [hotel, setHotel] = useState({})
    const show_hotel_link = API_LOCALHOST + HOTELS + '/' + hotel_id
    const hotels_link = LOCALHOST + HOTELS
    const branch_link = hotels_link + '/' + hotel_id + BRANCHES
    const new_hotel_branch_link = branch_link + NEW
    const edit_hotel_link = hotels_link + '/' + hotel_id + EDIT
    const location = useLocation();

    useEffect( () => {
        axios.get(show_hotel_link)
        .then(response => {
            console.log(response)
            console.log(location.pathname)
            setHotel(response.data) 
        })
        .catch(error => {console.log(error)})
    }, [show_hotel_link, location.pathname])

    return (
        <div>
            <h1>{hotel.name}</h1>
            <p> {hotel.phone} | {hotel.email}</p><br />
            <EditButton href={edit_hotel_link}>Edit</EditButton>
            <BackButton href={hotels_link}>Back</BackButton><br /><br />
            <AddButton href={new_hotel_branch_link}> Add Branch </AddButton><br /><br />
            <AllButton href={branch_link}>All Branches</AllButton><br /><br />

        </div>
        
    )
}

export default ShowHotel
