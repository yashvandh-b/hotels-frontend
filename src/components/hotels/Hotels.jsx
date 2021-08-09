import React, {useEffect, useState} from 'react';
import {HotelProvider, useHotels, fetchHotelsList} from 'components/hotels/hotelContext'
import {Pagination} from 'components/pagination/Pagination'
import {AddButton} from 'components/hotels/hotelComponents'
import {newHotelLink} from 'components/data-services/links'
import Hotel from 'components/hotels/hotel';

const Hotels = () => {

    const [state, dispatch] = useHotels()
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
        fetchHotelsList(dispatch);
    }, [dispatch]);

    const hotels = state.hotels || [];
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const current_hotels = hotels.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    //console.log(state, "Hotels");
    return (
        <div>
            {!current_hotels.length ? <p>No Hotels</p>  : 
                <div>
                    <h1>Available Hotels</h1><br />
                    <AddButton href={newHotelLink()}> Add Hotel </AddButton><br /><br />
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
                            {current_hotels.map(hotel => (
                                <HotelProvider key={hotel.id}>
                                    <Hotel key={hotel.id} hotel={hotel} />
                                </HotelProvider>
                            ))}
                        </tbody>

                    </table>
                    <br />
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={hotels.length}
                        paginate={paginate}
                    />
                </div>}
        </div>
    );
};

export default Hotels;