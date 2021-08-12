import React, {createContext, useContext, useReducer} from 'react'
import axios from 'axios'
import {getJSON} from 'components/data-services/api-calls'
import {hotelsAPILink, hotelAPILink} from 'components/data-services/api-links'

const HotelStateContext = createContext();
const HotelDispatchContext = createContext();

const GET_HOTEL = 'GET_HOTEL'
const GET_HOTELS = 'GET_HOTELS'
const SET_ITEMS_LOADING = 'SET_ITEMS_LOADING'

const initialState = {
    hotels: [],
    hotel: {},
    isLoading: false
}


function getHotels(hotels) {
    return { 
      type: GET_HOTELS,
      data: hotels
    };
}

function getHotel(hotel) {
    return { 
      type: GET_HOTEL,
      data: hotel
    };
}

function setItemsLoading(isLoading) {
    return { 
        type: SET_ITEMS_LOADING,
        data: isLoading
    };
};

function hotelReducer(state=initialState, action) {
    switch (action.type) {
        case GET_HOTELS:
            return {
                ...state,
                hotels: action.data
            };
        case GET_HOTEL:
            return {
                ...state,
                hotel: action.data
            };
        case SET_ITEMS_LOADING:
            return {
                ...state,
                isLoading: action.data
            };
        default:
            return state;
    }
}

export const fetchHotelsList = (dispatch, page, items) => {
    
    //const hotels = getJSON(hotelsLink())
    //console.log(hotels, "HotelContext")
    //dispatch(getHotels(hotels))
    dispatch(setItemsLoading(true));
    axios.get(hotelsAPILink(page, items))
    .then(response => {
        //console.log(response)
        dispatch(getHotels(response.data))
    })
    .catch(error => {console.log(error)});
    dispatch(setItemsLoading(false))
}

export const fetchHotel = (dispatch, hotel_id) => {
    
    //const hotel = getJSON(hotelLink(hotel_id))
    //console.log(hotel, "HotelContext")
    //dispatch(getHotel(hotel))
    dispatch(setItemsLoading(true));
    axios.get(hotelAPILink(hotel_id))
    .then(response => {
        //console.log(response)
        dispatch(getHotel(response.data))
    })
    .catch(error => {console.log(error)});
    dispatch(setItemsLoading(false));
}

const HotelProvider = (props) => {

    const [state, dispatch] = useReducer(hotelReducer, initialState)

    return (
        <HotelStateContext.Provider value={state}>
            <HotelDispatchContext.Provider value={dispatch}>
                {props.children}
            </HotelDispatchContext.Provider>
        </HotelStateContext.Provider>
    );
}

function useHotelState() {
    const context = useContext(HotelStateContext);
    if (context === undefined) {
        throw new Error('useHotelState must be used within a HotelProvider');
    }
    return context;
}

function useHotelDispatch() {
    const context = useContext(HotelDispatchContext);
    if (context === undefined) {
        throw new Error('useHotelDispatch must be used within a HotelProvider');
    }
    return context;
}

function useHotel() {
    return [useHotelState(), useHotelDispatch()]
}

export {useHotel, useHotelDispatch, useHotelState, HotelProvider}


