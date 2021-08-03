import React, {createContext, useContext, useReducer} from 'react'
import axios from 'axios'
import { API_LOCALHOST, HOTELS } from 'components/routes/config'

export const HotelContext = createContext();
export const HotelProvider = HotelContext.Provider;
export const HotelConsumer = HotelContext.Consumer;

export const HotelsContext = createContext();

const HotelsStateContext = createContext();
const HotelsDispatchContext = createContext();

const GET_HOTELS = 'GET_HOTELS'

const initialState = {
    hotels: []
}

function getHotels(hotels) {
    return{ 
      type: GET_HOTELS,
      data: hotels
    }
}

function hotelsReducer(state, action) {
    switch (action.type) {
        case GET_HOTELS:
            return {
                ...state,
                hotels: action.data
            };
        default:
            return state;
    }
}

export const fetchHotelsList = (dispatch) => {
    const api_hotels_link = API_LOCALHOST + HOTELS;
    axios.get(api_hotels_link)
    .then(response => {
        console.log(response)
        dispatch(getHotels(response.data))
    })
    .catch(error => {console.log(error)});
}

const HotelsProvider = props => {

    const [state, dispatch] = useReducer(hotelsReducer, initialState)

    return (
        <HotelsStateContext.Provider value={state}>
            <HotelsDispatchContext.Provider value={dispatch}>
                {props.children}
            </HotelsDispatchContext.Provider>
        </HotelsStateContext.Provider>
    );

}

function useHotelsState() {
    const context = useContext(HotelsStateContext);
    if (context === undefined) {
        throw new Error('useHotelsState must be used within a HotelsProvider');
    }
    return context;
}

function useHotelsDispatch() {
    const context = useContext(HotelsDispatchContext);
    if (context === undefined) {
        throw new Error('useHotelsDispatch must be used within a HotelsProvider');
    }
    return context;
}


function useHotels() {
    return [useHotelsState(), useHotelsDispatch()]
}

export {useHotels, useHotelsDispatch, useHotelsState, HotelsProvider}


