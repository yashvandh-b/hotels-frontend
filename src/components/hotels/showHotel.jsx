import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {LinkComponent} from './hotelComponents'


const ShowHotel = () => {

    const { hotel_id } = useParams();
    const [hotel, setHotel] = useState({})
    const show_link = 'http://127.0.0.1:3000/hotels/' + hotel_id
    const branch_link = '/hotels/' + hotel_id + '/branches'

    useEffect( () => {
        axios.get(show_link)
        .then(response => {
            console.log(response)
            setHotel(response.data) 
        })
        .catch(error => {console.log(error)})
    }, [show_link])

    return (
        <div>
            <h1>{hotel.name}</h1>
            <p> {hotel.phone} | {hotel.email}</p>
            <LinkComponent href={branch_link}>All Branches</LinkComponent>
        </div>
        
    )
}

export default ShowHotel
