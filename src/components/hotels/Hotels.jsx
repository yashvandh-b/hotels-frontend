import React, {useEffect, useState} from 'react';
import {useHotel, fetchHotelsList} from 'components/hotels/hotelContext'
import {AddButton, PreviousButton, NextButton, DisplayPage} from 'components/hotels/hotelComponents'
import {newHotelLink} from 'components/data-services/links'
import Hotel from 'components/hotels/hotel';
import {useLocation, useHistory} from 'react-router-dom';

const Hotels = () => {

    const [state, dispatch] = useHotel()
    const history = useHistory();
    //const [currentPage, setCurrentPage] = useState(1);
    //const [postsPerPage] = useState(5);

    var numberPattern = /\d+/g;
    var pageNumber = parseInt(useLocation().search.match(numberPattern));
    pageNumber = pageNumber ? pageNumber : 1;

    const [page, setPage] = useState(pageNumber);
    const items = 10;
    const MAX_PAGE = 6;

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

    const previousPage = () => {
        if(page > 1)
        {
            const hotels_page_path = "/hotels?page=" + (page-1);
            setPage(page-1);
            history.push(hotels_page_path);
        }
            
    }

    const nextPage = () => {
        if(page < MAX_PAGE)
        {
            const hotels_page_path = "/hotels?page=" + (page+1);
            setPage(page+1);
            history.push(hotels_page_path);
        }    
    }

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
                    <DisplayPage>Page No. {page}</DisplayPage><br /><br />
                    <PreviousButton onClick={previousPage}> Previous Page </PreviousButton>
                    <NextButton onClick={nextPage}> Next Page </NextButton>

                        {/*   <Pagination postsPerPage={postsPerPage} totalPosts={hotels.length} paginate={paginate} /> */}
                </div>}
        </div>
    );
};

export default Hotels;