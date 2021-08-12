import React, {useEffect} from 'react';
import {useHotel, fetchHotelsList} from 'components/hotels/hotelContext'
import {AddButton} from 'components/hotels/hotelComponents'
import {newHotelLink} from 'components/data-services/links'
import Hotel from 'components/hotels/hotel';
import {useParams} from 'react-router-dom';

const Hotels = () => {

    const [state, dispatch] = useHotel()
    //const [currentPage, setCurrentPage] = useState(1);
    //const [postsPerPage] = useState(5);

    console.log(useParams(), "Use Params")

    const page = 1;
    const items = 10;

    useEffect(() => {
        fetchHotelsList(dispatch, page, items);
    }, [dispatch, page, items]);

    const hotels = state.hotels || [];
    /*     
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const current_hotels = hotels.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber); 
    */

    //console.log(state, "Hotels");
    return (
        <div>
            {!hotels.length ? <p>No Hotels</p>  : 
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
                            {hotels.map(hotel => (
                                    <Hotel key={hotel.id} hotel={hotel} />
                            ))}
                        </tbody>

                    </table>
                    <br />
                        {/*   <Pagination postsPerPage={postsPerPage} totalPosts={hotels.length} paginate={paginate} /> */}
                </div>}
        </div>
    );
};

export default Hotels;