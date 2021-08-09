import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {AllButton, BackButton, AddButton, EditButton} from 'components/hotels/hotelComponents'
import {useHotel, fetchHotel} from 'components/hotels/hotelContext'
import {editHotelLink, hotelsLink, newHotelBranchLink, branchLink} from 'components/data-services/links'


const ShowHotel = () => {

    const [state, dispatch] = useHotel()
    const { hotel_id } = useParams();

    useEffect(() => {
        console.log(hotel_id, "ShowHotel")
        fetchHotel(dispatch, hotel_id);
    }, [dispatch, hotel_id]);

    console.log(state.hotel, "ShowHotel")

    const hotel = state.hotel


    return (
        <div>
            <h1>{hotel.name}</h1>
            <p> {hotel.phone} | {hotel.email}</p><br />
            <EditButton href={ editHotelLink(hotel_id) }>Edit</EditButton>
            <BackButton href={ hotelsLink() }>Back</BackButton><br /><br />
            <AddButton href={ newHotelBranchLink(hotel_id) }> Add Branch </AddButton><br /><br />
            <AllButton href={ branchLink(hotel_id) }>All Branches</AllButton><br /><br />

        </div>  
    );
}

export default ShowHotel; 
