import React, {useEffect, useState} from 'react';
import Hotel from './hotel';
import axios from 'axios';
import {HotelProvider} from './context'
import {HotelHeader} from './hotelComponents'


const Hotels = () => {

    const [hotels, setHotels] = useState([])

    useEffect( () => {
        axios.get('http://127.0.0.1:3000/hotels')
        .then(response => {
            console.log(response)
            setHotels(response.data) 
        })
        .catch(error => {console.log(error)})
    }, [])

    return (
        <div>
            {!hotels.length ? <p>"No Hotels"</p>  : 
                <div>
                    <h1>Available Hotels</h1>
                    <table>
                        <HotelHeader />
                        <tbody>
                            {hotels.map(hotel => <HotelProvider key={hotel.id} value={hotel}><Hotel key={hotel.id} /></HotelProvider>)}
                        </tbody>
                    </table>
                </div>}
        </div>
    );
};

export default Hotels;