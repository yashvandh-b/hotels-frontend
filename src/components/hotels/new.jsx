import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'

const AddHotel = () => {

    const [hotel, setHotel] = useState({name: '', phone: '', email: '', user_id: 1})
    const inputRef = useRef(null);

    useEffect( () => {
        console.log(hotel.name, hotel.phone, hotel.email)
    }, [hotel])

    useEffect( () => {
        inputRef.current.focus()
    }, [])

    const onAddHotel = (e) => {
        e.preventDefault()
        console.log(hotel)
        axios.post('http://127.0.0.1:3000/hotels', hotel)
    }

    return (
        <div>
            <h1>Add New Hotel</h1>
            <form onSubmit={onAddHotel}>
                <label name="name">
                    Name:
                    <input ref={inputRef} name="name" type="text" value={hotel.name} onChange={e => {setHotel({...hotel, name: e.target.value})}}/>
                </label><br />
                <label name="phone">
                    Phone:
                    <input name="phone" type="text" value={hotel.phone} onChange={e => {setHotel({...hotel, phone: e.target.value})}}/>
                </label><br />
                <label name="email">
                    Email:
                    <input name="email" type="text" value={hotel.email} onChange={e => {setHotel({...hotel, email: e.target.value})}} />
                </label><br />
                <input type="submit" value="Create Hotel"/>
            </form>
        </div>
    );
};

export default AddHotel;