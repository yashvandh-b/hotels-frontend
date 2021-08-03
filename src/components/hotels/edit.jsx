import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'
import {SubmitButton, BackButton} from 'components/hotels/hotelComponents'
import {LOCALHOST, API_LOCALHOST, HOTELS} from 'components/routes/config'
import {useHistory, useParams} from 'react-router-dom'

const EditHotel = () => {

    const {hotel_id} = useParams()
    const history = useHistory()
    const [hotel, setHotel] = useState({name: '', phone: '', email: '', user_id: 1})
    const inputRef = useRef(null);
    const show_link = LOCALHOST + HOTELS + '/' + hotel_id
    const api_show_link = API_LOCALHOST + HOTELS + '/' + hotel_id
    const api_edit_hotel_link = API_LOCALHOST + HOTELS + '/' + hotel_id

    useEffect( () => {
        console.log(hotel.name, hotel.phone, hotel.email)
    }, [hotel])

    useEffect( () => {
        inputRef.current.focus()
        axios.get(api_show_link)
        .then(response => {
            console.log(response)
            setHotel(response.data) 
        })
        .catch(error => {console.log(error)})
    }, [api_show_link])

    const onEditHotel = (e) => {
        e.preventDefault()
        console.log(hotel)
        axios.put(api_edit_hotel_link, hotel)
        .then((response) => {
            console.log(response);
            const hotel_path = '/hotels/' + response.data.id
            history.push(hotel_path)
        })
        .catch((errors) => {console.log(errors)})
    }

    return (
        <div>
            <h1>Edit Hotel</h1><br />
            <form>
                <label name="name">
                    Name:
                    <input ref={inputRef} name="name" type="text" value={hotel.name} onChange={e => {setHotel({...hotel, name: e.target.value})}}/>
                </label><br /><br />
                <label name="phone">
                    Phone:
                    <input name="phone" type="text" value={hotel.phone} onChange={e => {setHotel({...hotel, phone: parseInt(e.target.value)})}}/>
                </label><br /><br />
                <label name="email">
                    Email:
                    <input name="email" type="text" value={hotel.email} onChange={e => {setHotel({...hotel, email: e.target.value})}} />
                </label><br /><br />
                <SubmitButton type="button" onClick={onEditHotel}> Save Changes </SubmitButton><br /><br />
                <BackButton href={show_link}>Back</BackButton>
            </form>
        </div>
    );
};

export default EditHotel;