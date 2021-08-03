import React, {useEffect} from 'react';
import {HotelProvider, useHotels, fetchHotelsList} from 'components/hotels/hotelContext'

import {AddButton} from 'components/hotels/hotelComponents'
import { LOCALHOST, HOTEL, NEW } from 'components/routes/config'
import Hotel from 'components/hotels/hotel';

const Hotels = () => {

    const [state, dispatch] = useHotels()

    useEffect(() => {
        fetchHotelsList(dispatch);
    }, [dispatch]);

    console.log(state)
    //const [hotels, setHotels] = useContext(HotelsContext)
    const hotels = state.hotels || []
    const new_hotel_link = LOCALHOST + HOTEL + NEW;
    return (
        <div>
            {!hotels.length ? <p>No Hotels</p>  : 
                <div>
                    <h1>Available Hotels</h1><br />
                    <AddButton href={new_hotel_link}> Add Hotel </AddButton><br /><br />
                    <table>
                        
                        <thead>
                            <tr>
                                <th>Hotel Id</th>
                                <th>Hotel Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>User Id</th>
                                <th></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {hotels.map(hotel => (<HotelProvider key={hotel.id} value={hotel}><Hotel key={hotel.id} /></HotelProvider>))}
                        </tbody>

                    </table>
                </div>}
        </div>
    );
};

export default Hotels;